// This whole component added for Step 18

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-notes',
  templateUrl: './to-do-notes.component.html',
  styleUrls: ['./to-do-notes.component.css']
})
export class ToDoNotesComponent implements OnInit, OnDestroy {
  id: string;
  todo: Todo;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private todoDataService: TodoDataService) {}

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.id = params['id'];
      this.subscription = this.todoDataService.getTodoById(this.id).subscribe((aTodo: Todo) => {
        this.todo = aTodo;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
