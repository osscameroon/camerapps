import { Router } from 'express';

import * as categoryController from '../controllers/category.controller';

export const categoryRoute = (): Router => {
  const prefix = '/categories';
  const router = Router();

  router.post(`${prefix}`, categoryController.create);

  router.get(`${prefix}`, categoryController.retrieveAll);

  router.get(`${prefix}/:id`, categoryController.retrieveById);

  router.delete(`${prefix}/:id`, categoryController.remove);

  router.put(`${prefix}/:id`, categoryController.update);

  return router;
};
