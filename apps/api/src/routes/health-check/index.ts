import { Request, Response } from 'express';
//@ts-expect-error public
import {version, name} from '../../../package.json';

export const healthCheckRoute = {
    method: 'GET',
    url: '/health-check',
    handler: async (request: Request, response: Response) => {
        response.status(200).send({
            appName: `${name} Drenvio`,
            appVersion: version,
            status: 'ok',
            uptime: process.uptime(), 
        })
    }
};