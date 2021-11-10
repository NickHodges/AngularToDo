import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private todoDataService: TodoDataService) {}

  // Everything below is added for Step 7
  private subscriptions: Subscription = new Subscription();
  public completetodos: Array<Todo>;
  public incompletetodos: Array<Todo>;

  ngOnInit() {
    this.RefreshTodos();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  completedTodos() {
    this.subscriptions.add(this.todoDataService.completedTodos().subscribe(todos => (this.completetodos = todos)));
  }

  incompletedToDos() {
    this.subscriptions.add(this.todoDataService.incompletedTodos().subscribe(todos => (this.incompletetodos = todos)));
  }

  private RefreshTodos() {
    this.completedTodos();
    this.incompletedToDos();
  }
}
