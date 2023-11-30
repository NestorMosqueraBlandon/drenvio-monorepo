import { Request, Response } from "express";

export interface RouteOptions {
    method: string;
    url: string;
    handler: (req: Request, response: Response) => void;
}
  