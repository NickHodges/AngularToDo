import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn$: Observable<boolean> = this.authenticationService.isLoggedIn;
    let result: Boolean = false;
    isLoggedIn$.pipe(first()).subscribe((loggedIn: boolean) => {
      result = loggedIn;
    });

    if (result) {
      return true;
    }
    this.router.navigate(['/sorry'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
