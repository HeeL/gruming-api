import mongo from 'mongoose';

export default mongo.connect(process.env.MONGOLAB_URI || '127.0.0.1:27017/gruming');
