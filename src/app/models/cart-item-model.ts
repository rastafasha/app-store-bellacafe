import { Producto } from './producto.model';
export class CartItemModel {

  _id: string;
  producto: string;
  user: string;
  cantidad:number;
  precio:number;
  color:string;
  selector:string;

    constructor(producto: Producto){
      this._id= producto._id;
      this.producto = producto.titulo;
      this.precio = producto.precio_ahora;
      this.cantidad = 1;
    }

}
