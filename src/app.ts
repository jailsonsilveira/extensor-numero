import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import logger from 'morgan';
import path from 'path';
import * as fs from 'fs';
const app = express();
const expressSwagger = require('express-swagger-generator')(app);
let options = {
    swaggerDefinition: {
        info: {
            description: 'Gerador de número por extenso',
            title: 'Numero Extenso Generator',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http']
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*'] //Path to the API handle folder
};
expressSwagger(options)


app.set("port", process.env.PORT || 3000);

app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const routes = fs.readdirSync(`${__dirname}/routes`)
    .forEach(f =>{
        console.log(`Route ${f} loaded`);
        require(`${__dirname}/routes/${f}`)(app);
    });

require(`${__dirname}/exceptions/resource-not-found`)(app);


export default app;