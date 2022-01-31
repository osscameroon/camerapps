import { NextFunction, Request, Response } from 'express';
import { GenericResponse } from '../types/request';
import { logger } from './logger';
import { ENV } from './config';
import { INTERNAL_SERVER_ERROR } from '../utils/constants';

export const notFoundMiddleware = (req: Request, res: Response): Response<GenericResponse> => {
  return res.status(404).json({ message: 'The resource not found.' });
};

export const errorHandlerMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): Response<GenericResponse> | void => {
  if (ENV === 'production') {
    logger.error(error);

    return res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }

  next(error);
};
