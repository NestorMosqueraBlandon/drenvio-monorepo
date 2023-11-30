import { getPricesByUserId } from "@drenvio/business-logic";
import { Request, Response } from "express";

export const getPricesByUserIdRoute = {
    method: 'GET',
    url: '/price/:user_id/:nombre_producto',
    handler: async (request: Request, response: Response) => {
        try{
            const userId = request.params.user_id;
            const productName = request.params.nombre_producto;

            const price = await getPricesByUserId(userId, productName);
            response.status(200).send(price)
        }catch(err){
            response.status(500).send(err)
        }

    }
};
