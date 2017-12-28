import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { PratoModule } from './prato/prato.module';
import { environment } from '../environments/environment.prod';
import { Prato } from './prato/pratoObj.module';

const API_URL = environment.apiUrl; 
@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
 // API: GET /Prato
  public getAllTodos(): Observable<PratoModule[]>  {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/Pratos')
    .map(response => {
      const pratos = response.json();
      return response.json();
    })
    .catch(this.handleError);
  }

  // API: POST /todos
  public createTodo(todo: PratoModule): Observable<PratoModule>  {
    return this.http
    .post(API_URL + '/Pratos', todo)
    .map(response => {
      return new Prato(response.json());
    })
    .catch(this.handleError);
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) : Observable<PratoModule> {
    return this.http
    .get(API_URL + '/Pratos/' + todoId)
    .map(response => {
      return new Prato(response.json());
    })
    .catch(this.handleError);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: PratoModule): Observable<PratoModule> {
    return this.http
    .put(API_URL + '/Pratos/' + todo.id, todo)
    .map(response => {
      return new Prato(response.json());
    })
    .catch(this.handleError);
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) : Observable<null>{
    return this.http
    .delete(API_URL + '/Pratos/' + todoId)
    .map(response => null)
    .catch(this.handleError);
  }

}
