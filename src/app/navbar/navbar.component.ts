// Added in Step 3
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthenticationService } from '../utils/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  isLoggedOut: boolean;

  constructor(public authService: AuthenticationService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn()
    this.isLoggedOut = !this.isLoggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['../login'], { relativeTo: this.route });
  }
}
