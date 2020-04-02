import * as assert from 'assert';
import numeroExtenso from '../../src/services/numero-extenso.service';

describe('Testing service numero-extenso', function () {
    it('return string "menos noventa e nove mil e novecentos e noventa e nove"', function () {
        assert.equal(numeroExtenso.generateNumeroExtenso(-99999), 'menos noventa e nove mil e novecentos e noventa e nove');
    });

    it('return string "noventa e nove mil e novecentos e noventa e nove"', function () {
        assert.equal(numeroExtenso.generateNumeroExtenso(99999), 'noventa e nove mil e novecentos e noventa e nove');
    });

    it('return string "zero"', function () {
        assert.equal(numeroExtenso.generateNumeroExtenso(0), 'zero');
    });
    it('return string "cem"', function () {
        assert.equal(numeroExtenso.generateNumeroExtenso(100), 'cem');
    });
});