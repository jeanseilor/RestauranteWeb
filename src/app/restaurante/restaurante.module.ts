import { RestauranteComponent } from './restaurante.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PratoRoutingModule } from '../prato-detalhe/app-routing.module';
import { FormsModule } from '@angular/forms';
import { RestauranteRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    FormsModule
  ],
  declarations: [RestauranteComponent],
  exports:[RestauranteComponent]
})
export class RestauranteModule { 
   id: number;
   descricao :string;
  
  constructor( ) {
    
  }

}
