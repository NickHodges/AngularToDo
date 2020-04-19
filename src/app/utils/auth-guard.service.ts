import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) {}

  canActivate(): boolean {
    const result = this.authService.isLoggedIn();
    if (!result) {
      this.router.navigate(['/sorry']);
    }
    return result;
  }
}
