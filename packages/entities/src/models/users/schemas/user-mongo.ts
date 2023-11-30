import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import { User } from './user';

export const UserSchemaMongo = new Schema<User>({
 nombre: { type: String },
 metadata: { 
    precios_especiales: [
        {
            nombre_producto: { type: String },
            precio_especial_personal: { type: Number },
        }
    ]
  },
 status: { type: String, default: StatusType.ACTIVE },
},
{
 versionKey: false,
 timestamps: true,
});