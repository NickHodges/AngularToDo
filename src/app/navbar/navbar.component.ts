// Added in Step 3
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthenticationService } from '../utils/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthenticationService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  public get isLoggedIn(): Observable<boolean> {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./login'], { relativeTo: this.route });
  }
}
