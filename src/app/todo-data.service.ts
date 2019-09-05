// This file was added in Step 5
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from './todo';

@Injectable() // Injectable needed here because we are injecting into this service
export class TodoDataService {
  private rootURL: string = 'http://localhost:3000';

  constructor(private aHttpService: HttpClient) {}

  // Read/Get All todos
  getAllTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`${this.rootURL}/todos`);
  }

  // Added for Step 7
  // Get all completed tasks
  completedTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`${this.rootURL}/todos`, {
      params: new HttpParams().set('complete', 'true')
    });
  }

  // Added for Step 7
  // Get all incomplete tasks
  incompletedTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`${this.rootURL}/todos`, {
      params: new HttpParams().set('complete', 'true')
    });
  }
}
