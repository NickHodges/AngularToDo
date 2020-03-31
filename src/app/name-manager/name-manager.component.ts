// This component was added for Step 21

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-name-manager',
  templateUrl: './name-manager.component.html',
  styleUrls: ['./name-manager.component.css']
})
export class NameManagerComponent implements OnInit {
  public showNameGetter: boolean;
  name$: Observable<string>;
  tempName: string;

  constructor(private store: Store<{ name: string }>) {
    this.name$ = this.store.pipe(select('name'));
    this.name$.subscribe(theName => (this.tempName = theName));
    this.showNameGetter = this.tempName == '';
  }

  ngOnInit(): void {}

  toggle() {
    this.showNameGetter = !this.showNameGetter;
  }
}
