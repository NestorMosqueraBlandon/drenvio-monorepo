import { getAllProductsInStock } from "@drenvio/business-logic";
import { Response } from "express";

export const getAllProductsInStockRoute = {
    method: 'GET',
    url: '/products',
    handler: async (_, response: Response) => {
        try{
            const products = await getAllProductsInStock({});
            response.status(200).send(products)
        }catch(err){
            response.status(500).send(err)
        }

    }
};
