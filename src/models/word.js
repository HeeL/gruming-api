import mongo from 'mongoose';

const wordSchema = new mongo.Schema({
    article: String,
    word: String
});

export default mongo.model('words', wordSchema);
