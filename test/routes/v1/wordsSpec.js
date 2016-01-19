import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import app from '../../../src/app';
import wordModel from '../../../src/models/word';

describe('Requests to the /v1/words/random path', () => {
  it('returns a 200 status code', (done) => {
    request(app)
      .get('/v1/words/random')
      .expect(200, done);
  });

  it('returns a JSON format', (done) => {
    request(app)
      .get('/v1/words/random')
      .expect('Content-Type', /json/, done);
  });

  it('handles errors', (done) => {
    sinon.stub(wordModel, 'findOne', () => {
        throw new Error('Internal Error');
    });
    sinon.stub(console, 'error', () => '');

    request(app)
      .get('/v1/words/random')
      .end((err, res) => {
          wordModel.findOne.restore();
          console.error.reset();
          expect(res.status).to.equal(500);
          expect(res.body).to.deep.equal({ 'error': 'Error: Internal Error' });
          done();
      });
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


describe('Requests to the non-existing page', function() {

  it('returns a 404 status code', function(done) {
    request(app)
      .get('/404')
      .expect(404, done);
  });

});
