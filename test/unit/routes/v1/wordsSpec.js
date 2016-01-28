import request from 'supertest';
import { expect } from 'chai';
import sinon from 'sinon';
import mongo from 'mongoose';
import 'sinon-as-promised';
import 'sinon-mongoose';
import app from '../../../../src/app';
import wordModel from '../../../../src/models/word';

describe('requests to /v1/words/random', () => {
    beforeEach(() => {
        const expectedResponse = {
            article: 'das',
            word: 'Auto'
        };
        sinon.stub(mongo, 'connect');
        const mockWordModel = sinon.mock(wordModel);

        mockWordModel.expects('count')
        .chain('execAsync')
        .resolves(1);

        mockWordModel.expects('findOne')
        .chain('limit').withArgs(-1)
        .chain('skip').withArgs(0)
        .chain('execAsync')
        .resolves(expectedResponse);
    });

    afterEach(() => {
        mongo.connect.restore();
        wordModel.count.restore();
        wordModel.findOne.restore();
    });

    it('should response with 200 status code', (done) => {
        request(app)
        .get('/v1/words/random')
        .expect(200, done);
    });

    it('should return a JSON format', (done) => {
        request(app)
        .get('/v1/words/random')
        .expect('Content-Type', /json/, done);
    });

    it('should handle errors', (done) => {
        const mockWordModel = sinon.mock(wordModel);
        wordModel.count.restore();
        mockWordModel.expects('count')
        .chain('execAsync')
        .rejects('Internal Error');

        sinon.stub(console, 'error', () => '');

        request(app)
        .get('/v1/words/random')
        .end((err, res) => {
            console.error.reset();
            expect(res.status).to.equal(500);
            expect(res.body).to.deep.equal({ 'error': 'Error: Internal Error' });
            done();
        });
    });

});
