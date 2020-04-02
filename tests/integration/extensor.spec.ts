import supertest from 'supertest';

let maxNumberExtenso = { extenso: "noventa e nove mil e novecentos e noventa e nove" };
let minNumberExtenso = { extenso: "menos noventa e nove mil e novecentos e noventa e nove" };


describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('../../src/index');
    });
    afterEach(function () {
        server.close();
    });
    it('respond with 99999 extenso', function testMaxNumber(done) {
        supertest(server)
            .get(`/99999`)
            .expect(200)
            .expect(maxNumberExtenso)
            .end((err) => {
                if (err) return done(err);
                return done();
            })
    });

    it('respond with -99999 extenso', function testMinNumber(done) {
        supertest(server)
            .get('/-99999')
            .expect(minNumberExtenso)
            .end((err) => {
                if (err) return done(err);
                return done();
            })
    });

    it('respond with 422', function testMinNumber(done) {
        supertest(server)
            .get('/-100000')
            .expect(422, done)
            
    });

    it('respond with 422', function testMinNumber(done) {
        supertest(server)
            .get('/100000')
            .expect(422, done)
            
    });

    it('404 resource not found', function testPath(done) {
        supertest(server)
            .get('/outra/request')
            .expect(404, done);
    });
});