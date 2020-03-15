import { Application } from "express";

module.exports = function (app: Application) {
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

}
