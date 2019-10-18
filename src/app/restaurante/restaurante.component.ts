import { Restaurante } from './restaurante.model';
import { RestauranteService } from './../restaurante.service';
import { Component, OnInit } from '@angular/core';
import { RestauranteModule } from './restaurante.module';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router/src/router';


@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  restaurantes: RestauranteModule[];
  descricao:string;
  constructor(
    private api: RestauranteService
    
  ) { }

  ngOnInit() {
    this.getRestaurantes();
  }
  getRestaurantes(): void{
    this.api
    .getAllTodos().subscribe((restaurantes) => {


        this.restaurantes = restaurantes;


        console.log(this.restaurantes);
      }
    );

  }
  
  deletar(id:number){
    this.api.deleteTodoById(id).subscribe((prato) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> teste dois
=======

>>>>>>> 06ab11514880becd84260178397b6273053c4c9f
      
     this.getRestaurantes();
      }
    );
  }



  onSubmit(): void{
    this.api
    .getAllByDescricao(this.descricao).subscribe((restaurantes) => {
        this.restaurantes = restaurantes;
        console.log(this.restaurantes);
      }
    );
  }  


}
