import { Restaurante } from './../restaurante/restaurante.model';


import { RestauranteModule } from './../restaurante/restaurante.module';
import { RestauranteComponent } from './../restaurante/restaurante.component';
import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante.service';
import { ActivatedRoute, Params } from '@angular/router';

import { Location } from '@angular/common'



@Component({
  selector: 'app-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html',
  styleUrls: ['./restaurante-detalhe.component.css']
})
export class RestauranteDetalheComponent implements OnInit {
  restaurante: RestauranteModule;

  constructor(
    private api: RestauranteService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((params:Params)=>{
      

      let id: number = +params['id'];
      if(id){
        this.api
        .getTodoById(id).subscribe((prato) => {
            this.restaurante = prato;
          }
        );
      }
      this.restaurante = new Restaurante(0, "");
    })
  }


  onSubmit(): void{
    console.log(this.restaurante)
    this.api.addTodo(this.restaurante).subscribe((prato) => {
      console.log(this.restaurante);
      }
    );

  }

}
