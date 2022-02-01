import { Router } from 'express';

import * as applicationController from '../controllers/application.controller';

export const applicationRoute = (): Router => {
  const prefix = '/applications';
  const router = Router();

  router.post(`${prefix}`, applicationController.create);

  router.get(`${prefix}`, applicationController.retrieveAll);

  router.get(`${prefix}/:id`, applicationController.retrieveById);

  router.delete(`${prefix}/:id`, applicationController.remove);

  router.patch(`${prefix}/:id`, applicationController.update);

  return router;
};
