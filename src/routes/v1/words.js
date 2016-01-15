import express from 'express';
import mongo from '../../lib/mongoConnection';
import wordModel from '../../models/word';

const router = express.Router();

router.get('/random', (req, res, next) => {
    wordModel.count().exec((err, wordsCount) => {
        const random =  Math.floor((Math.random() * wordsCount));
        wordModel.findOne({}, 'word article -_id').limit(-1).skip(random).exec(function (err, word) {
            res.json(word);
        });
    });
});

export default router;
