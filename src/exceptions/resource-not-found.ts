import * as express from 'express';
import numeroExtensoController from '../controllers/numero-extenso.controller';


module.exports = function (app: express.Application) {

    app.get('*', function(req, res){
        res.status(404).json({ message: "Recurso não encontrado"});
      });
}



  