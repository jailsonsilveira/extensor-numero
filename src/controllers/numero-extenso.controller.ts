import * as express from 'express';
import numeroExtensoService from '../services/numero-extenso.service';

class NumeroExtensoController {

    public getNumeroExtenso = (req: express.Request, res: express.Response, next: express.NextFunction) => {

        let numero = parseInt(req.params.numero);

        if (isNaN(numero)) {
            return res.status(422).send({ message: "Parâmetro informado não é um número" });
        }

        if (numero > 9999 || numero < -9999) {
            return res.status(422).send({ message: "número fora da faixa de valores permitidos" });
        }

        let extenso = numeroExtensoService.generateNumeroExtenso(numero);
        return res.status(200).send({ extenso });
    }
}

export default new NumeroExtensoController();