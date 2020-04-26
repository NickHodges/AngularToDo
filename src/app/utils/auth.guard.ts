import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate() {
    let theResult: boolean = false;
    this.authenticationService.isLoggedIn.pipe(take(1)).subscribe(result => {
      theResult = result;
    });
    if (!theResult) {
      this.router.navigate(['/sorry']);
      return false;
    }
    return true;
  }
}
