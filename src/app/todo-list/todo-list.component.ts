import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
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
    this.subscriptions.add(this.todoDataService.completedTodos().subscribe((todos) => (this.completetodos = todos)));
  }

  incompletedToDos() {
    this.subscriptions.add(this.todoDataService.incompletedTodos().subscribe((todos) => (this.incompletetodos = todos)));
  }

  private RefreshTodos() {
    this.completedTodos();
    this.incompletedToDos();
  }
  // Added for Step 8
  onAddTodo(todo: Todo) {
    this.subscriptions.add(
      this.todoDataService.addTodo(todo).subscribe((val) => {
        this.incompletetodos.push(val);
      })
    );
  }
  // Added for Step 9

  makeComplete(todo: Todo) {
    this.subscriptions.add(
      this.todoDataService.toggleTodoComplete(todo).subscribe((val) => {
        const index = this.incompletetodos.findIndex((thetodo) => thetodo.id === val.id);
        this.incompletetodos.splice(index, 1);
        this.completetodos.push(val);
      })
    );
  }

  // Added for Step 10
  makeIncomplete(todo: Todo) {
    this.subscriptions.add(
      this.todoDataService.toggleTodoComplete(todo).subscribe((val) => {
        const index = this.completetodos.findIndex((thetodo) => thetodo.id === val.id);
        this.completetodos.splice(index, 1);
        this.incompletetodos.push(val);
      })
    );
  }

  // Added for Step 11
  removeTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id).subscribe((val) => {
      const index = this.incompletetodos.findIndex((thetodo) => thetodo.id === todo.id);
      this.incompletetodos.splice(index, 1);
    });
  } // Added for Step 12
  editTodo(todo: Todo) {
    todo.editMode = true;
  }

  // Added for Step 12
  updateTodo(todo: Todo, editInput) {
    todo.title = editInput.value;
    todo.editMode = false;
    this.subscriptions.add(
      this.todoDataService.updateTodoById(todo.id, todo).subscribe((val) => {
        const index = this.incompletetodos.findIndex((thetodo) => thetodo.id === val.id);
        this.incompletetodos[index] = todo;
      })
    );
  }
}
