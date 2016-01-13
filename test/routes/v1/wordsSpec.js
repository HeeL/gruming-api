const request = require('supertest');
const app = require('../../../app');

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

});
