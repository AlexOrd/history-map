const logger = require('../lib/logger');

const model = require('./index');

module.exports = function(sequelize, DataTypes) {
    const Place = sequelize.define('Place', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        comment: DataTypes.STRING,
        latitude: DataTypes.DECIMAL,
        longitude: DataTypes.DECIMAL
    }, {
        indexes: [{
            fields: ['placeId']
        }], 
        classMethods: {
            associate: function(m) {
                Place.hasMany(m.Rename, {
                        as: 'placeId', foreignKey: 'renameId'
                });
            }
        }
    });

    return Place;
};
