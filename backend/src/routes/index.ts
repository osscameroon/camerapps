import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import { engine } from 'express-handlebars';

import { errorHandlerMiddleware, notFoundMiddleware } from '../core/middleware';

import { defaultRoute } from './default.route';
import { genreRoute } from './genre.route';
import { categoryRoute } from './category.route';
import { applicationRoute } from './application.route';

export const initializeRoutes = (app: express.Application) => {
  const router = express.Router();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(helmet());
  app.use(cors());

  app.engine('handlebars', engine());
  app.set('view engine', 'handlebars');

  app.set('views', path.resolve(__dirname, '../views'));

  app.use(errorHandlerMiddleware);

  app.use('/', router);
  // API Documentation
  // app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

  // default route
  app.use('/', defaultRoute());
  // genre route
  app.use('/', genreRoute());
  // category route
  app.use('/', categoryRoute());
  // application route
  app.use('/', applicationRoute());

  // Static content
  app.use(express.static(path.join(__dirname, '../../public')));

  app.use(notFoundMiddleware);
};
