// This file was added in Step 5
import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from './todo';

@Injectable() // Injectable needed here because we are injecting into this service
export class TodoDataService {
  //private rootURL: string = 'http://localhost:3000/todos';
  private rootURL: string = 'https://my-json-server.typicode.com/nickhodges/TodoData/todos';
  ToDosChanged = new EventEmitter<Todo>();

  // Built-in dependency injection
  constructor(private aHttpService: HttpClient) {}

  // Read/Get All todos
  getAllTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`${this.rootURL}`);
  }

  // Added for Step 7
  // Get all completed tasks
  completedTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`${this.rootURL}`, {
      // Updated for Step 12
      params: new HttpParams().set('complete', 'true')
    });
  }

  // Added for Step 7
  // Get all incomplete tasks
  incompletedTodos(): Observable<Array<Todo>> {
    return this.aHttpService.get<Array<Todo>>(`${this.rootURL}`, {
      // Updated for Step 12
      params: new HttpParams().set('complete', 'false')
    });
  }

  // Added for Step 8
  // Create/Post todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.aHttpService.post<Todo>(`${this.rootURL}`, todo);
  }

  // Added for Step 9
  // Complete function
  toggleTodoComplete(todo: Todo): Observable<Todo> {
    todo.complete = !todo.complete;
    return this.updateTodoById(todo.todoid, todo);
  }

  // Added for Step 9
  // Update/Put todo
  updateTodoById(todoid: number, todoToUpdate: Todo): Observable<Todo> {
    return this.aHttpService.put<Todo>(`${this.rootURL}/${todoid}`, todoToUpdate);
  }

  // Added for Step 11
  // Delete todo
  deleteTodoById(todoid: number): Observable<Todo> {
    return this.aHttpService.delete<Todo>(`${this.rootURL}/${todoid}`);
  }

  // Added for Step 19
  getTodoById(todoid: number): Observable<Todo> {
    return this.aHttpService.get<Todo>(`${this.rootURL}/${todoid}`);
  }
}
