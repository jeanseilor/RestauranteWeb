
import { PratoModule } from './../prato/prato.module';
import { Component, OnInit } from '@angular/core';
import { PratoService } from '../prato.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'
import { Prato } from '../prato/pratoObj.module';

@Component({
  selector: 'app-prato-detalhe',
  templateUrl: './prato-detalhe.component.html',
  styleUrls: ['./prato-detalhe.component.css']
})
export class PratoDetalheComponent implements OnInit {
  prato: PratoModule;
  constructor(
    private pratoService: PratoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  
    this.route.params.forEach((params:Params)=>{
      let id: number = +params['id'];
     this.prato = new Prato();
      if(id){
        this.pratoService
        .getTodoById(id).subscribe((prato) => {
            this.prato = prato;
            console.log(this.prato);
          }
        );
      }
    })
    
  }

}
