import {  Express, Router, Request, Response } from 'express';
import { healthCheckRoute } from './health-check';
import { RouteOptions, logger } from '@drenvio/core-modules';
import { productsRoutes } from './products';
import { usersRoutes } from './users';

const router = Router();

const routes: RouteOptions[] = [
  healthCheckRoute,
  ...productsRoutes,
  ...usersRoutes
];

export const registerRoutes = (server:  Express ): Router => {
  logger.warn('[server]: Registering routes');

  routes.forEach((route: RouteOptions) => {
    const { method, url, handler } = route;

    switch (method) {
      case 'GET':
        router.get(url, handler);
        break;
      case 'POST':
        router.post(url, handler);
        break;
      case 'PUT':
        router.put(url, handler);
        break;
      case 'DELETE':
        router.delete(url, handler);
        break;
      default:
        logger.warn(`[server]: Invalid method "${method}" for route ${url}`);
        break;
    }
  });

  server.use(router);

  return router;
};
