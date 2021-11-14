import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public Stuff: string = 'This text came from the TypeScript file.';
  constructor() {}

  ngOnInit() {}
}
