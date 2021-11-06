import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import { createConnection } from 'typeorm';
import 'express-async-errors';

import setupError from './shared/errors/setupError';
import setupExpress from './shared/config/setup-express';
import setupRoutes from './shared/routes/setup-routes';
import setupSwagger from './shared/config/setup-swagger';
import prototypes from './shared/utils/protorypes';
import setupInjector from './shared/config/setup-injector';


createConnection();

const app = express();
setupInjector();
setupExpress(app);
setupSwagger(app);
setupRoutes(app);
setupError(app);
prototypes();

export default app;
