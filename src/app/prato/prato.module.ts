import { NgModule, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PratoComponent } from './prato.component';
import { PratoRoutingModule } from '../prato-detalhe/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PratoRoutingModule,
    FormsModule
  ],
  declarations: [PratoComponent],
  exports:[PratoComponent]
})
export class PratoModule { 

  id: number;
  descricao :string;
  preco : number;

  constructor( ) {
    
  }

}
