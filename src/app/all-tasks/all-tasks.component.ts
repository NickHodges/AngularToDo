import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
  constructor(private todoDataService: TodoDataService) {}
  // Added for Step 6
  allTodos: Observable<Array<Todo>>;

  ngOnInit() {
    // Added for Step 6
    this.allTodos = this.todoDataService.getAllTodos();
  }
}
