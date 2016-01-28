import request from 'supertest';
import app from '../../src/app';

describe('Requests to the non-existing page', function() {
    it('returns a 404 status code', function(done) {
        request(app)
        .get('/404')
        .expect(404, done);
    });
});
