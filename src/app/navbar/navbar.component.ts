// Added in Step 3
import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthenticationService, private route: ActivatedRoute, private router: Router) {}

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }

  isLoggedOut(): boolean {
    return this.auth.isLoggedOut;
  }

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.router.navigate(['../login'], { relativeTo: this.route });
  }
}
