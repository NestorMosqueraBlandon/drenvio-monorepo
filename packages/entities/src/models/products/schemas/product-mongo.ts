import * as crypto from 'crypto';
import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import { Product } from './product';

export const ProductSchemaMongo = new Schema<Product>({
 nombre: { type: String },
 id_marca: { type: String, ref: 'brands' },
 precioBase: { type: Number },
 enStock: { type: Boolean },
 status: { type: String, default: StatusType.ACTIVE },
},
{
 versionKey: false,
 timestamps: true,
});