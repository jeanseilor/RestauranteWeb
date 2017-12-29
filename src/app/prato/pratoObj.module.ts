import { Restaurante } from "../restaurante/restauranteObj.module";

export class Prato { 

  id: number;
  descricao :string;
  preco : number;
  restauranteId :number;
  restaurante : Restaurante

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
  
}
  