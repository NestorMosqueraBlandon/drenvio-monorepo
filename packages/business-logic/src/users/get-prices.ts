
import { Collection, getModel } from "@drenvio/constant-definitions";
import { UserSchemaMongo, User, Product, ProductSchemaMongo } from "@drenvio/entities";

interface ResultPrice {
  name: string;
  price: number;
}

export const getPricesByUserId = async (userId: string, productName: string): Promise<ResultPrice | Error> => {
 const model = getModel<User>(Collection.USERS, UserSchemaMongo);
 const modelProducts = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);

 const user = await model.findById(userId);

 if(!user) throw new Error("User not found");
  
 const metadata = user.metadata;

 const especialPrices = metadata.precios_especiales;

 const actualEspecialPrice = especialPrices.find((price) => price.nombre_producto === productName);

 if(!actualEspecialPrice){
    const product = await modelProducts.findOne({ nombre: productName, enStock: true });
    if (product) {
      return { name: productName, price: product.precioBase}
    }
 }else{
  return {name: productName, price: actualEspecialPrice.precio_especial_personal}
 }

};
