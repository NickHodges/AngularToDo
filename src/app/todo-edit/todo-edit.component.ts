// This whole component was added for Step 20

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from '../todo';
import { Subscription } from 'rxjs';
import { TodoDataService } from '../todo-data.service';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private todoDataService: TodoDataService, private router: Router) {}
  todoid: number;
  todo: Todo;
  subscription: Subscription;
  editNoteForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.route.params.subscribe((params: Params) => {
      this.todoid = +params['id'];
      this.subscription = this.todoDataService.getTodoById(this.todoid).subscribe((aTodo: Todo) => {
        this.todo = aTodo;
        this.editNoteForm = new FormGroup({ editNote: new FormControl(this.todo.note) });
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

  onSubmitNote() {
    let newNote = this.editNoteForm.value['editNote'];
    let newTodo = this.createNewTodoWithNewNote(newNote, this.todo);
    this.todoDataService.updateTodoById(newTodo.id, newTodo).subscribe((aTodo: Todo) => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

  private createNewTodoWithNewNote(aNewNote: string, aTodo: Todo): Todo {
    let tempTodo: Todo = new Todo();
    tempTodo.id = aTodo.id;
    tempTodo.title = aTodo.title;
    tempTodo.note = aNewNote;
    tempTodo.editMode = aTodo.editMode;
    tempTodo.complete = aTodo.complete;
    return tempTodo;
  }
}
