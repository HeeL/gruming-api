import express from 'express';
import mongoConnection from '../../lib/mongoConnection';
import wordModel from '../../models/word';

const router = express.Router();

router.get('/random', (req, res, next) => {
    mongoConnection();
    wordModel.count().execAsync()
    .then((wordsCount) => {
        return Math.floor((Math.random() * wordsCount));
    }).then((randomNumber) => {
        return wordModel.findOne({}, 'word article -_id').limit(-1).skip(randomNumber).execAsync();
    }).then((word) => {
        res.json(word);
    }).catch((error) => {
        next(error);
    });
});

export default router;
