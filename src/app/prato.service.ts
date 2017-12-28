import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

import { PratoModule } from './prato/prato.module';

import { Injectable } from '@angular/core';


@Injectable()
export class PratoService {

  constructor(
    private api: ApiService
  ) {}

  addTodo(todo: PratoModule): Observable<PratoModule> {
    return this.api.createTodo(todo);
  }
  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<PratoModule> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: PratoModule): Observable<PratoModule> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<PratoModule[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<PratoModule> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: PratoModule) {
  
    return this.api.updateTodo(todo);
  }


}
