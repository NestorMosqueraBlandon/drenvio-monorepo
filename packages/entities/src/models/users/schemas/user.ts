import { Base } from "../../../common";

interface Prices {
    nombre_producto: string;
    precio_especial_personal: number;
}

interface Metadata {
    precios_especiales: Prices[];
}

export interface User extends Base {
    nombre: string;
    metadata: Metadata
}