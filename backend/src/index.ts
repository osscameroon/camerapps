import http from 'http';
import express from 'express';
import { PrismaClient } from '@prisma/client';

import { SERVER_PORT, BASE_URL } from './core/config';
import { logger } from './core/logger';
import { seedDatabase } from './core/db/seed';
import { initializeRoutes } from './routes';

const app = express();

initializeRoutes(app);

const server = http.createServer(app);

server.listen(SERVER_PORT, async () => {
  const prisma = new PrismaClient();

  prisma.$connect();

  await seedDatabase();

  logger.info(`Server started at ${BASE_URL}`);
});

process.on('unhandledRejection', (e) => {
  logger.error(e);

  process.exit(1);
});

process.on('uncaughtException', (e) => {
  logger.error(e);

  process.exit(1);
});

export { server };
