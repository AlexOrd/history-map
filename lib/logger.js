'use strict';

const winston = require('winston');

var logger = new (winston.Logger)({ transports: [
    new (winston.transports.Console)({
        colorize: true,
        timestamp: true,
        level: process.env.LOG_LEVEL || 'debug'
    })
] });

module.exports = logger;
