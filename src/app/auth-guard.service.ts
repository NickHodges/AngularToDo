import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isLoggedIn() {
      this.router.navigate(['sorry']);
      return false;
    }
    return true;
  }
}
