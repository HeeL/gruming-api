import request from 'supertest';
import app from '../../../app';

describe('Requests to the /v1/words path', function() {

  it('returns a 200 status code', function(done) {
    request(app)
      .get('/v1/words')
      .expect(200, done);
  });

  it('returns a JSON format', function(done) {
    request(app)
      .get('/v1/words')
      .expect('Content-Type', /json/, done);
  });

  it('returns a JSON object', function(done) {
    request(app)
      .get('/v1/words')
      .expect(JSON.stringify({ message: 'OK' }), done);
  });

  it('returns a JSON object', function(done) {
    request(app)
      .get('/v1/words/article')
      .expect(JSON.stringify({ message: 'OK2' }), done);
  });

  it('returns a JSON object', function(done) {
    request(app)
      .get('/v1/words/random')
      .expect(JSON.stringify({ message: 'OK3' }), done);
  });


});
