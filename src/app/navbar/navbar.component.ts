// Added in Step 3
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthenticationService } from '../utils/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthenticationService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.authService.retrieveAuthInfoFromUrl();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
