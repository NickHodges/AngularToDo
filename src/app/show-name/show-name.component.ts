// This component was added for Step 21

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.css']
})
export class ShowNameComponent {
  name$: Observable<string>;

  constructor(private store: Store<{ name: string }>) {
    this.name$ = this.store.pipe(select('name'));
  }
}
