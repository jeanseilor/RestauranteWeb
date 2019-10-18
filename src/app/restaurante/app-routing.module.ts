import { RestauranteDetalheComponent } from './../restaurante-detalhe/restaurante-detalhe.component';
import { RestauranteComponent } from './../restaurante/restaurante.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PratoComponent } from '../prato/prato.component';

const routes: Routes = [

    {
        path: 'restaurante',
        component: RestauranteComponent
    },  

    
    {
        path: 'restaurante/save',
        component: RestauranteDetalheComponent
    },
    {
        path: 'restaurante/save/:id',
        component: RestauranteDetalheComponent
    },
   
   
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
export class RestauranteRoutingModule { }