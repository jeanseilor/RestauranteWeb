
export class Restaurante { 
  id: number;
  descricao :string;
  
  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
  

}
