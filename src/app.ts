import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import CookieParser from 'cookie-parser';

import corsOptions from '@/config/corsOptions';
import config from '@/config';
import morganMiddleware from '@/middlewares/MorganMiddleware';
import errorHandlingMiddleware from '@/middlewares/ErrorHandlingMiddleware';

import todosRoutes from '@/api/v1/todos';

const app: Express = express();

app.use(CookieParser(config.cookieSecret));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(morganMiddleware);

app.use('/api/v1/todos', todosRoutes);

app.use(errorHandlingMiddleware);

export default app;
