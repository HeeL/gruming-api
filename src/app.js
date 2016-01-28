import express from 'express';
import helmet from 'helmet';
import { logErrors, errorHandler } from './lib/errorHandler';
import words from './routes/v1/words';

const app = express();

// security
app.use(helmet());
app.disable('x-powered-by');

// api routes
app.use('/v1/words', words);

// logs, error handling
app.use(logErrors);
app.use(errorHandler);

export default app;
