import supertest from 'supertest';

let maxNumberExtenso = { extenso: "nove mil e novecentos e noventa e nove" };
let minNumberExtenso = { extenso: "menos nove mil e novecentos e noventa e nove" };


describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('../../src/index');
    });
    afterEach(function () {
        server.close();
    });
    it('respond with 9999 extenso', function testMaxNumber(done) {
        supertest(server)
            .get(`/9999`)
            .expect(200)
            .expect(maxNumberExtenso)
            .end((err) => {
                if (err) return done(err);
                return done();
            })
    });

    it('respond with -9999 extenso', function testMinNumber(done) {
        supertest(server)
            .get('/-9999')
            .expect(minNumberExtenso)
            .end((err) => {
                if (err) return done(err);
                return done();
            })
    });

    it('respond with 422', function testMinNumber(done) {
        supertest(server)
            .get('/-10000')
            .expect(422, done)
            
    });

    it('respond with 422', function testMinNumber(done) {
        supertest(server)
            .get('/10000')
            .expect(422, done)
            
    });

    it('404 resource not found', function testPath(done) {
        supertest(server)
            .get('/outra/request')
            .expect(404, done);
    });
});