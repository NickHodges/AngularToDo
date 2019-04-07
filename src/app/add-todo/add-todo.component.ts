// This file added in Step 8

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  newTodo: Todo = new Todo();

  @Output() addTodoEvent: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  addTodo() {
    this.addTodoEvent.emit(this.newTodo);
    this.newTodo = new Todo();
  }

  ngOnInit() {}
}
