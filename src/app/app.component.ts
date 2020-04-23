import { Component, OnInit } from '@angular/core';
import { AutoLogoutService } from './utils/autologout.service';
import { AuthenticationService } from './utils/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: AutoLogoutService) {}

  ngOnInit() {}
}
