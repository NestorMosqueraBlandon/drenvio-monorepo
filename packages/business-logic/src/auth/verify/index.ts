import * as jwt from 'jsonwebtoken';
import { Request, Response } from "express";

const { NODE_ENV, API_KEY, JWT_SECRET } = process.env;


interface RequestUser extends Request {
    user?: string ;
}


export const verify = (request: Request, reply: Response, done: () => void) => {
    const apiKey = request.headers['api-key'];
    const isHttps = request.protocol === 'https' || NODE_ENV! == 'development';
    
    if(!isHttps) return reply.status(400).send('Bad Request: The request must be made over HTTPS'); 
    
    if(!apiKey) return reply.status(401).send('Unauthorized: API key is missing');
    
    const validApiKey = apiKey == API_KEY!;
    if(!validApiKey) return reply.status(401).send('Unauthorized: Invalid API key');
    
    done();
}


export const verifyToken = async (request: RequestUser, reply: Response) => {
    const authHeader = request.headers.authorization;
    
    if(!authHeader) return reply.status(401).send('Unauthorized: Authorization header is missing');
    
    const token = authHeader.split(' ')[1];
    
    try{
        const decodedToken = await jwt.verify(token!, JWT_SECRET!);
        request.user = decodedToken as string;
        return decodedToken;
    }catch(err){
        return reply.status(401).send('Invalid token')
    }
}