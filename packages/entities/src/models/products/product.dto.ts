import { Product } from "./schemas";

export interface CreateProductDto extends Omit<Product, '_id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateProductDto extends Partial<Product> {}
