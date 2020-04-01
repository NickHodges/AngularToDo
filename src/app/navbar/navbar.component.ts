// Added in Step 3
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn$;
    this.isLoggedOut$ = this.auth.isLoggedOut$;
  }
}
