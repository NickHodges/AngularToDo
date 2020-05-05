import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../utils/authentication.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styles: []
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.handleLoginCallback();
  }
}
