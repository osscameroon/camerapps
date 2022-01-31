import { Router } from 'express';

import * as genreController from '../controllers/genre.controller';

export const genreRoute = (): Router => {
  const prefix = '/genres';
  const router = Router();

  router.post(`${prefix}`, genreController.create);

  router.get(`${prefix}`, genreController.retrieveAll);

  router.get(`${prefix}/:id`, genreController.retrieveById);

  router.delete(`${prefix}/:id`, genreController.remove);

  router.put(`${prefix}/:id`, genreController.update);

  return router;
};
