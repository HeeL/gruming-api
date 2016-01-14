import express from 'express';
import words from './routes/v1/words';

const app = express();
app.use(express.static(__dirname + '/public'));
app.use('/v1/words', words);

export default app;
