const bunyan = require('bunyan');
const {LoggingBunyan} = require('@google-cloud/logging-bunyan');
const cloudLogger = new  LoggingBunyan();


const config = {
    name:'simple-app',
    streams:[
        {stream: process.stdout, level:'info'},
        cloudLogger.stream('info')
    ]
}

const logger = bunyan.createLogger(config)

logger.info('Hi yall')
logger.error("uh oh something bad happended ")
