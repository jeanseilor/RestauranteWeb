import { Restaurante } from './restaurante/restauranteObj.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../environments/environment.prod';



const API_URL = environment.apiUrl; 
@Injectable()
export class ApiServiceRestaurante {
  
  constructor(private http: Http) {
  }

  private handleError (error: Response | any) {
    console.error('ApiServiceRestaurante::handleError', error);
    return Observable.throw(error);
  }
 // API: GET /Prato
  public getAllTodos(): Observable<RestauranteModule[]>  {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/Restaurantes')
    .map(response => {
      const pratos = response.json();
      return response.json();
    })
    .catch(this.handleError);
  }

  public getAllByDescricao(descricao:string): Observable<RestauranteModule[]>  {
    // will use this.http.get()
    return this.http
    .get(API_URL + '/Restaurantes/GetRestarantesLike/'+descricao)
    .map(response => {
      const pratos = response.json();
      return response.json();
    })
    .catch(this.handleError);
  }



  private extractData(res: Response) {
    console.log("Erro!")
    return new Restaurante(res.json());
  }

  // API: POST /todos
  public createTodo(todo: RestauranteModule): Observable<RestauranteModule>  {
    let body = JSON.stringify(todo);
    console.log(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
   
    let options = new RequestOptions({ headers: headers });
    return this.http
    .post(API_URL + '/Restaurantes', todo, options)
    .map(response => {
      this.extractData;
    })
    .catch(this.handleError);
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) : Observable<RestauranteModule> {
 
    return this.http
    .get(API_URL + '/Restaurantes/' + todoId)
    .map(response => {
      return new Restaurante(response.json());
    })
    .catch(this.handleError);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: RestauranteModule): Observable<RestauranteModule> {
    return this.http
    .put(API_URL + '/Restaurantes/' + todo.id, todo)
    .map(response => {
      return new Restaurante(response.json());
    })
    .catch(this.handleError);
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) : Observable<null>{
    return this.http
    .delete(API_URL + '/Restaurantes/' + todoId)
    .map(response => null)
    .catch(this.handleError);
  }

}
