import { Application } from "express";
import logger, { stream } from "../logging/logger";
import morgan from "morgan";

module.exports = function (app: Application) {

    app.use(morgan('combined', { stream }));

}
