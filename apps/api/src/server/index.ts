import "dotenv/config";
import express, { Express } from "express";
import cors from 'cors';
import { registerRoutes } from '../routes';
import { verify } from '@drenvio/business-logic';
import { logger } from "@drenvio/core-modules";
import { initDataSources } from '@drenvio/data-sources';

const { PORT, MONGODB_URL } = process.env;

const corsOptions = {
  origin: '*',
};

const main = async() => {
  await initDataSources({ mongoose: { mongoUrl: MONGODB_URL } })
  const server: Express = express();

  server.use(cors(corsOptions));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use((req, res, next) => {
    verify(req, res, next);
  });

  server.use("/api/v1", registerRoutes(server));

  server.listen(PORT, () => {
    logger.info(`Backend App is running at http://locahost:${PORT}`);
    logger.info('Press CTRL-c to stop');
   });

}

void main();