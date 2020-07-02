// This whole component added for Step 18

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private todoDataService: TodoDataService, private router: Router) {}

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

  onEditNote() {
    //this.router.navigate(['edit'], { relativeTo: this.route });
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
}
