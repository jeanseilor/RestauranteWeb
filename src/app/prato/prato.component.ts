
import { Component, OnInit } from '@angular/core';
import { PratoService } from '../prato.service';
import { PratoModule } from './prato.module';


@Component({
  
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {
  pratos: PratoModule[];
  constructor(
    private pratoService: PratoService
  ) { }
  
  ngOnInit() {
    this.getPratos();
  }

  getPratos() :void{
    this.pratoService
    .getAllTodos().subscribe((pratos) => {
        console.log(this.pratos = pratos);
       
      }
    );
  }

  deletar(id:number){
    this.pratoService.deleteTodoById(id).subscribe((prato) => {
      this.getPratos();
      }
    );
  }
}
