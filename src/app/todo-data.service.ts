import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
  constructor(private aHttpService: HttpClient) {}

  // Create/Post todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.aHttpService.post<Todo>(`http://localhost:3000/todos`, todo);
  }

  // Delete todo
  deleteTodoById(id: number): Observable<Todo> {
    return this.aHttpService.delete<Todo>(`http://localhost:3000/todos/${id}`);
  }

  // Read/Get All todos
  getAllTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`http://localhost:3000/todos`);
  }

  // Read/Get single todo
  getTodoById(id: number): Observable<Todo> {
    return this.aHttpService.get<Todo>(`http://localhost:3000/todos/${id}`);
  }

  // Update/Put todo
  updateTodoById(id: number, newTodo: Todo): Observable<Todo> {
    return this.aHttpService.put<Todo>(
      `http://localhost:3000/todos/${id}`,
      newTodo
    );
  }

  // Complete function
  toggleTodoComplete(todo: Todo): Observable<Todo> {
    todo.complete = !todo.complete;
    return this.updateTodoById(todo.id, todo);
  }

  // Get all completed tasks
  completedTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(
      `http://localhost:3000/todos?complete=true`
    );
  }

  // Get all incomplete tasks
  incompletedTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(
      `http://localhost:3000/todos?complete=false`
    );
  }
}
