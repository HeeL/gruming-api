import Promise from 'bluebird';

const mongo = Promise.promisifyAll(require('mongoose'));

export default function() {
    mongo.connect(process.env.MONGOLAB_URI || '127.0.0.1:27017/gruming');
}
