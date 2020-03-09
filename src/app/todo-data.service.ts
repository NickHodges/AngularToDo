// This file was added in Step 5
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable() // Injectable needed here because we are injecting into this service
export class TodoDataService {
  private rootURL: string = 'https://nicktodoapi.herokuapp.com/todos';

  // Built-in dependency injection
  constructor(private aHttpService: HttpClient) {}

  // Read/Get All todos
  getAllTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`${this.rootURL}`);
  }
}
