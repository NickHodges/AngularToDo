import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class LogoutGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkToken();
  }
  canLoad(route: Route): boolean {
    return this.checkToken();
  }
  checkToken() {
    const token = localStorage.getItem('currentUser');
    if (token) {
      const tokenInfo = this.getDecodedAccessToken(token);
      if (tokenInfo) {
        if (Date.now() >= tokenInfo.exp * 1000) {
          this.authenticationService.logout();
        }
      }
    }
    return true;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
