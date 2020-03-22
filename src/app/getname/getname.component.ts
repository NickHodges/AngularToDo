// This component was added for Step 21

import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { setName } from '../name.actions';

@Component({
  selector: 'app-getname',
  templateUrl: './getname.component.html',
  styleUrls: ['./getname.component.css']
})
export class GetNameComponent {
  userName: string;
  @Output() getNameEvent: EventEmitter<string> = new EventEmitter();

  constructor(private store: Store<{ name: string }>) {}

  setName(aName: string) {
    this.store.dispatch(setName({ name: aName }));
  }

  setUserName(aName: string) {
    this.userName = aName;
    this.setName(this.userName);
    this.getNameEvent.emit(this.userName);
  }
}
