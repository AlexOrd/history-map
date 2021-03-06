'use strict';

const winston = require('winston');

const logger = new (winston.Logger)({ transports: [
    new (winston.transports.Console)({
        colorize: true,
        timestamp: true,
        level: process.env.LOG_LEVEL || 'debug'
    })
] });

module.exports = logger;
