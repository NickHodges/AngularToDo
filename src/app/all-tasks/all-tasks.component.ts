import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
  constructor(private todoDataService: TodoDataService) {}

  ngOnInit() {}
}
