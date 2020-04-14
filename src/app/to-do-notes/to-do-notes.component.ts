// This whole component added for Step 18

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TodoDataService } from '../utils/todo-data.service';
import { Todo } from '../models/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-notes',
  templateUrl: './to-do-notes.component.html',
  styleUrls: ['./to-do-notes.component.css']
})
export class ToDoNotesComponent implements OnInit, OnDestroy {
  _id: string;
  todo: Todo;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private todoDataService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this._id = params['id'];
      this.subscription = this.todoDataService.getTodoById(this._id).subscribe((aTodo: Todo) => {
        this.todo = aTodo;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

  onEditNote() {
    //this.router.navigate(['edit'], { relativeTo: this.route });
    this.router.navigate(['../', this._id, 'edit'], { relativeTo: this.route });
  }
}
