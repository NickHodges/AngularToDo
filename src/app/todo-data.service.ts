// This file was added in Step 5
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
  constructor(private aHttpService: HttpClient) {}

  // Read/Get All todos
  getAllTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`http://localhost:3000/todos`);
  }

  // Added for Step 7
  // Get all completed tasks
  completedTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(
      `http://localhost:3000/todos?complete=true`
    );
  }

  // Added for Step 7
  // Get all incomplete tasks
  incompletedTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(
      `http://localhost:3000/todos?complete=false`
    );
  }

  // Create/Post todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.aHttpService.post<Todo>(`http://localhost:3000/todos`, todo);
  }
}
