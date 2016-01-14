import express from 'express';
import words from './routes/v1/words';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.disable('x-powered-by');
app.use(express.static(__dirname + '/public'));
app.use('/v1/words', words);

export default app;
