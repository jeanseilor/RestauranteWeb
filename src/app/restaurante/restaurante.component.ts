import { RestauranteService } from './../restaurante.service';
import { Component, OnInit } from '@angular/core';
import { RestauranteModule } from './restaurante.module';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  restaurantes: RestauranteModule[];
 
  constructor(
    private restauranteService: RestauranteService,

  ) { }

  ngOnInit() {
    this.restauranteService
    .getAllTodos().subscribe((restaurantes) => {
        this.restaurantes = restaurantes;
        console.log(this.restaurantes);
      }
    );
  }

}
