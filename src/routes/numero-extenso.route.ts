import * as express from 'express';
import numeroExtensoController from '../controllers/numero-extenso.controller';


module.exports = function (app: express.Application) {

    /**
    * Gerador de número extenso
    * @route GET /{numero}
    * @group Números
    * @param {string} numero.path.required - número
    * @returns {object} 200 - Um objeto contendo o número por extenso
    * @returns {Error}  422 - erro de conversão do número
    */
    app.get('/:numero', numeroExtensoController.getNumeroExtenso)
}