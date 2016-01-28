import request from 'supertest';
import { expect } from 'chai';
import app from '../../../../src/app';

describe('requests to /v1/words/random', () => {

    it('returns a JSON object with keys article and word', function(done) {
        request(app)
        .get('/v1/words/random')
        .end(function(err, res){
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.all.keys('article', 'word');
            expect(['der', 'die', 'das']).to.contain(res.body.article);
            expect(res.body.word).to.be.a('string');
            done();
        });
    });

});
