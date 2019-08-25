// This file was added in Step 5
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { URL } from 'url';

@Injectable() // Injectable needed here because we are injecting into this service
export class TodoDataService {
  private rootURL: string = 'http://localhost:3000';

  constructor(private aHttpService: HttpClient) {}

  // Read/Get All todos
  getAllTodos(): Observable<Array<Todo>> {
    let url = new URL('/todos', this.rootURL);
    return this.aHttpService.get<Array<Todo>>(url.href);
  }
}
