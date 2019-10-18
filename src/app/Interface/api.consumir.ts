import { Observable } from 'rxjs/Observable';
export interface ApiConsumir<Object>{


    
    getAllTodos() : Observable<Object>[]

    createTodo(todo: Object): Observable<Object> 

    getTodoById(todoId: number) : Observable<Object>

    updateTodo(todo: Object,  id: number): Observable<Object>

    deleteTodoById(todoId: number) : Observable<null>
}