
import { Restaurante } from './../restaurante/restauranteObj.module';

import { RestauranteModule } from './../restaurante/restaurante.module';
import { RestauranteService } from './../restaurante.service';

import { PratoModule } from './../prato/prato.module';
import { Component, OnInit } from '@angular/core';
import { PratoService } from '../prato.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location } from '@angular/common'
import { Prato } from '../prato/pratoObj.module';



@Component({
  selector: 'app-prato-detalhe',
  templateUrl: './prato-detalhe.component.html',
  styleUrls: ['./prato-detalhe.component.css']
})
export class PratoDetalheComponent implements OnInit {
  prato: PratoModule;
  restaurantes: RestauranteModule[];
  selectedValue;
  constructor(
    private apiPrato: PratoService,
    private route: ActivatedRoute,
    private location: Location,
    private api: RestauranteService,
    private router: Router,
  ) { }

  ngOnInit() {
  
    this.route.params.forEach((params:Params)=>{
      let id: number = +params['id'];
     this.prato = new Prato();
      if(id){
        this.apiPrato
        .getTodoById(id).subscribe((prato) => {
            this.prato = prato;
            this.selectedValue = prato.restauranteId;
          }
        );
      }
    })

    this.getRestaurantes();
    
  }

  onSubmit(): void{
   

    this.prato.restauranteId = this.selectedValue;

    console.log(this.prato);
    if(!this.prato.id){
      this.apiPrato.addTodo(this.prato).subscribe((prato) => {
        console.log(this.prato);
        }
      );

    }else{
      this.apiPrato.toggleTodoComplete(this.prato).subscribe((prato) => {
        console.log(this.prato);
        }
      );
    }

    this.router.navigateByUrl('/prato');
    this.router.navigate(["prato"]);
  }    

  private getRestauranteById(id:number) : void{
    this.api
    .getTodoById(id).subscribe((prato) => {
        this.prato.restaurante  = prato
        console.log("----------");
        console.log(this.prato);
        console.log("----------");
      }
    );

  }

  private getRestaurantes() :void{
    this.api
    .getAllTodos().subscribe((restaurantes) => {
        this.restaurantes = restaurantes;
        console.log(this.restaurantes);
      }
    );
  }

}
