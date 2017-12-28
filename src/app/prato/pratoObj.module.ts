export class Prato { 

  id: number;
  descricao :string;
  preco : number;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
  
}
  