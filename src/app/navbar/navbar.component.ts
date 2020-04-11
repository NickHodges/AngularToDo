// Added in Step 3
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthenticationService, private route: ActivatedRoute, private router: Router) {}

  isLoggedIn: boolean;

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.router.navigate(['../login'], { relativeTo: this.route });
  }
}
