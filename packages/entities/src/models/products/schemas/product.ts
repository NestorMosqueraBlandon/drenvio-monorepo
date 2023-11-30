import { ObjectId } from "mongoose";
import { Base } from "../../../common";

export interface Product extends Base {
    nombre: string;
    id_marca: ObjectId;
    precioBase: number;
    enStock: boolean;
}