import { RestauranteDetalheComponent } from './../restaurante-detalhe/restaurante-detalhe.component';
import { RestauranteComponent } from './../restaurante/restaurante.component';
import { PratoDetalheComponent } from './prato-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PratoComponent } from '../prato/prato.component';

const routes: Routes = [
    {
        path: 'prato',
        component: PratoComponent
      
    },
    {
        path: 'prato/save',
        component: PratoDetalheComponent
    },
    {
        path: 'prato/save/:id',
        component: PratoDetalheComponent
    }
  
   
   
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class PratoRoutingModule { }