import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import * as fs from 'fs';

const app = express();
require('./config/swagger.config')(app);
require('./config/logging.config')(app);

app.set("port", process.env.PORT || 3000);
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