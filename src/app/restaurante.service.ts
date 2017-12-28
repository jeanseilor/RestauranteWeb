import { Restaurante } from './restaurante/restauranteObj.module';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ApiServiceRestaurante } from './api.service-restaurante';
import { RestauranteModule } from './restaurante/restaurante.module';

@Injectable()
export class RestauranteService {

  constructor(
    private api: ApiServiceRestaurante
  ) {}

  addTodo(todo: RestauranteModule): Observable<RestauranteModule> {
    console.log("Entrou no service")
    return this.api.createTodo(todo);
  }
  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<RestauranteModule> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: RestauranteModule): Observable<RestauranteModule> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<RestauranteModule[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<RestauranteModule> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: RestauranteModule) {
  
    return this.api.updateTodo(todo);
  }


}
