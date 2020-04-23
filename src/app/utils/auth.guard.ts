import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate() {
    return this.authenticationService.isLoggedIn;
  }
}
