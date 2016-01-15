import request from 'supertest';
import { expect } from 'chai';
import app from '../../../src/app';

describe('Requests to the /v1/words/random path', function() {

  it('returns a 200 status code', function(done) {
    request(app)
      .get('/v1/words/random')
      .expect(200, done);
  });

  it('returns a JSON format', function(done) {
    request(app)
      .get('/v1/words/random')
      .expect('Content-Type', /json/, done);
  });

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


describe('Requests to the /404', function() {

  it('returns a 404 status code', function(done) {
    request(app)
      .get('/404')
      .expect(404, done);
  });

});
