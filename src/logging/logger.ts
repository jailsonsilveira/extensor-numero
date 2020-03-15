import * as winston from 'winston';


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'app.log' })
    ]
});

logger.add(new winston.transports.Console({
    level: process.env.DEBUG ? 'debug' : 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    )
})
);


export const stream = {
    write: (message) => {
      logger.info(message);
    },
};

export default logger;
