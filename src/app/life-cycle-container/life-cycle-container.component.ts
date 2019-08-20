// This component was added for Step 16
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-container',
  templateUrl: './life-cycle-container.component.html',
  styleUrls: ['./life-cycle-container.component.css'],
})
export class LifeCycleContainerComponent implements OnInit {
  showStuff: Boolean = true;
  constructor() {}

  ngOnInit() {}

  toggleShowStuff() {
    this.showStuff = !this.showStuff;
  }
}
