import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import CookieParser from 'cookie-parser';

import corsOptions from '@/config/corsOptions';
import config from '@/config';

const app: Express = express();

app.use(CookieParser(config.cookieSecret));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors(corsOptions));
app.use(helmet());

export default app;
