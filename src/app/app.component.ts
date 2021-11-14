import { Component } from '@angular/core';
import { AutoLogoutService } from './utils/autologout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: AutoLogoutService) {
    const title = 'a4rb';
  }
}
