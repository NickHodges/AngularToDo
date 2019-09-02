import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-to-do-notes',
  templateUrl: './to-do-notes.component.html',
  styleUrls: ['./to-do-notes.component.css']
})
export class ToDoNotesComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    console.log(this.id);
  }
}
