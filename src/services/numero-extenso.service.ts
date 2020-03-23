import logger from "../logging/logger";

const data = require('../../resources/numbers.json');
class NumeroExtensoService {



    public generateNumeroExtenso(number: number) {

        logger.debug(`Numero informado: ${number}`);
        let extenso = "";

        if (number < 0) {
            extenso = 'menos ';
            number = number * -1;
        }

        extenso += this.tratarNumero(number, Math.pow(10, (number.toString().length) - 1));
        logger.debug(`Retorno: ${extenso}`);
        return extenso;
    }

    private tratarNumero(numero: number, maxRange: number): String {

        if (numero == 100) {
            return 'cem';
        }
        if (numero == 0) {
            return 'zero';
        }
        else if (data[numero]) {
            return data[numero];
        } else {

            let result;
            switch (maxRange) {
                case 10000:
                    result = data[(numero - (numero % 1000)) / 1000];
                    if (result) {
                        numero = numero % maxRange;
                        maxRange /= 10;
                    } else {
                        result = data[(numero - (numero % 10000)) / 1000];
                    }
                    break;
                case 1000:
                    result = data[(numero - (numero % 1000)) / 1000];
                    break;
                default:
                    result = data[(numero - (numero % maxRange))];
            }

            if (maxRange == 1000) {
               
               if (numero % maxRange == 0)
                        return result + " mil";
                result += " mil";
            }

            return result + ' e ' + this.tratarNumero(numero % maxRange, maxRange / 10);
        }

    }

}

export default new NumeroExtensoService();