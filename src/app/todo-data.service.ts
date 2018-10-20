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
}
