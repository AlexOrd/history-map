'use strict';

const Sequelize = require('sequelize');
const logger = require('../lib/logger');

const requireDir = require('../lib/require-dir');
const database  = require('../config.json');

function connectToDB(config) {
    return new Sequelize(config.database, config.username, config.password, {
        dialect: config.dialect,
        host: config.host,
        port: process.env.POSTGRESQL_PORT || config.port || 5432
    });
}

const sequelize = connectToDB(database[process.env.NODE_ENV || 'development']);

module.exports.sequelize = sequelize;

(function(m) {
    const constructors = requireDir(__dirname, {
        ignore: ['index.js']
    });

    Object.keys(constructors).forEach(function(key) {
        const model = sequelize.import(key, constructors[key]);
        m[model.name] = model;
    });

    Object.keys(m).forEach(function(modelName) {
        if ('associate' in m[modelName]) {
            m[modelName].associate(m);
        }
    });
}(module.exports));
