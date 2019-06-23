import { Component, OnInit, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  constructor(private todoDataService: TodoDataService) {}

  // Everything below is added for Step 7
  private completetodos: Array<Todo>;
  private incompletetodos: Array<Todo>;
  private completeSubscription: Subscription;
  private incompleteSubscription: Subscription;
  private addTodoSubscription: Subscription;
  private toggleSubscription: Subscription;

  ngOnInit() {
    this.RefreshTodos();
  }

  ngOnDestroy(): void {
    this.completeSubscription.unsubscribe();
    this.incompleteSubscription.unsubscribe();
    this.addTodoSubscription.unsubscribe();
    thos.toggleSubscription.unsubscribe();
  }

  completedTodos() {
    this.completeSubscription = this.todoDataService
      .completedTodos()
      .subscribe(todos => (this.completetodos = todos));
  }

  incompletedToDos() {
    this.incompleteSubscription = this.todoDataService
      .incompletedTodos()
      .subscribe(todos => (this.incompletetodos = todos));
  }

  private RefreshTodos() {
    this.completedTodos();
    this.incompletedToDos();
  }
  // Added for Step 8
  onAddTodo(todo: Todo) {
    addTodoSubscription = this.todoDataService.addTodo(todo).subscribe(val => {
      this.incompletetodos.push(val);
    });
  }
  // Added for Step 9
  makeComplete(todo) {
    toggleSubscription = this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(val => {
        const index = this.incompletetodos.findIndex(
          thetodo => thetodo.id === val.id
        );
        this.incompletetodos.splice(index, 1);
        this.completetodos.push(val);
      });
  }
  // Added for Step 10
  makeIncomplete(todo) {
    this.todoDataService.toggleTodoComplete(todo).subscribe(val => {
      const index = this.completetodos.findIndex(
        thetodo => thetodo.id === val.id
      );
      this.completetodos.splice(index, 1);
      this.incompletetodos.push(val);
    });
  }
}
