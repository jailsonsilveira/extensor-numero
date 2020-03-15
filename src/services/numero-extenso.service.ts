const data = require('../../resources/numbers.json');
class NumeroExtensoService {



    public generateNumeroExtenso(number: number) {

        let extenso = "";
        
        if (number < 0) {
            extenso = 'menos ';
            number = number * -1;
        }

        extenso += this.tratarNumero(number, 1000);
        return extenso;
    }

    private tratarNumero(numero: number, maxRange: number): String {
        if(numero == 100){
            return 'cem';
        }        
        if(numero == 0){
            return 'zero';
        }        
        else if (data[numero]) {            
            return data[numero];
        } else {
            let result = data[numero-(numero%maxRange)];
            return  (result? result + " e " : '') + this.tratarNumero(numero%maxRange, maxRange/10);
        }
        
    }
    
}

export default new NumeroExtensoService();