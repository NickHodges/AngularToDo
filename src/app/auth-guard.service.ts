import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthenticationService, public router: Router) {}
  canActivate(): Promise<boolean> {
    if (this.authService.userIsLoggedIn()) {
      console.log('the system thinks you are logged IN!');
      return new Promise(function(resolve) {
        resolve(true);
      });
    }
    console.log('the system thinks you are logged OUT!');
    this.router.navigate(['/sorry']);
    return new Promise(function(resolve) {
      resolve(false);
    });
  }
}
