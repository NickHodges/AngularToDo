import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private todoDataService: TodoDataService) {}

  completetodos: Array<Todo>;
  incompletetodos: Array<Todo>;

  ngOnInit() {
    this.RefreshTodos();
  }

  completedTodos() {
    this.todoDataService
      .completedTodos()
      .subscribe(todos => (this.completetodos = todos));
  }

  incompletedToDos() {
    this.todoDataService
      .incompletedTodos()
      .subscribe(todos => (this.incompletetodos = todos));
  }

  private RefreshTodos() {
    this.completedTodos();
    this.incompletedToDos();
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo).subscribe(val => {
      this.incompletetodos.push(val);
    });
  }

  makeComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo).subscribe(val => {
      const index = this.completetodos.findIndex(
        thetodo => thetodo.id === val.id
      );
      this.incompletetodos.splice(index, 1);
      this.completetodos.push(val);
    });
  }

  makeIncomplete(todo) {
    this.todoDataService.toggleTodoComplete(todo).subscribe(val => {
      const index = this.incompletetodos.findIndex(
        thetodo => thetodo.id === val.id
      );
      this.completetodos.splice(index, 1);
      this.incompletetodos.push(val);
    });
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id).subscribe(val => {
      const index = this.incompletetodos.findIndex(
        thetodo => thetodo.id === val.id
      );
      this.incompletetodos.splice(index, 1);
    });
  }

  editTodo(todo: Todo) {
    todo.editMode = true;
  }

  updateTodo(todo: Todo, editInput) {
    todo.title = editInput.value;
    todo.editMode = false;
    this.todoDataService.updateTodoById(todo.id, todo).subscribe(val => {
      const index = this.incompletetodos.findIndex(
        thetodo => thetodo.id === val.id
      );
      this.incompletetodos[index] = todo;
    });
  }
}
