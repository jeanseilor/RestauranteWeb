import { RestauranteService } from './restaurante.service';

import { PratoModule } from './prato/prato.module';
import { PratoService } from './prato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [PratoService, RestauranteService]
})
export class AppComponent  implements OnInit{
  title = 'app';
  pratos: PratoModule[] = [];

  constructor(
    private pratoService: PratoService
  ){}

  public ngOnInit(){
    
  }
  
  onAddTodo(todo) {
    this.pratoService.addTodo(todo);
  }

  onToggleTodoComplete(todo) {
    this.pratoService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.pratoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.pratoService.getAllTodos();
  }



}
