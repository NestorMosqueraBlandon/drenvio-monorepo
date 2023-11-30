
import { Collection, getModel } from "@drenvio/constant-definitions";
import { Product, ProductSchemaMongo, Result, Params } from "@drenvio/entities";
  
export const getAllProductsInStock = async ( {page = 1, limit = 100 }: Params): Promise<Result<Product>> => {
 const model = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);

 const query = { enStock: true }


 const pageSize = limit;
 const skip = (page - 1) * pageSize;

 const total = await model.countDocuments(query);

 const items = await model
   .find(query)
   .skip(skip)
   .limit(pageSize)
   .sort({createdAt: -1 })

 
 const pages = Math.ceil(total / pageSize);

 const hasPreviousPage = page > 1;
 const previousPage = hasPreviousPage ? page - 1 : page;
 const hasNextPage = page < pages;
 const nextPage = hasNextPage ? page + 1 : page;

 return {
   count: total,
   items,
   pageInfo: {
     page,
     pages,
     hasPreviousPage,
     hasNextPage,
     nextPage,
     previousPage,
   },
 };

};
