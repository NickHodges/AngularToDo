// This component was added for Step 21

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-manager',
  templateUrl: './name-manager.component.html',
  styleUrls: ['./name-manager.component.css']
})
export class NameManagerComponent implements OnInit {
  public showMe: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.showMe = !this.showMe;
  }
}
