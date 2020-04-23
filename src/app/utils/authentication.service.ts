import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';

const AUTH_CONFIG = {
  clientId: '6fYtHlaqm2qm6Gwsr4QTbSkZZEfCZzyU',
  domain: 'a4rb.auth0.com',
  responseType: 'token id_token',
  redirectUri: 'https://localhost:4200/contact'
};
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  myAuth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientId,
    domain: AUTH_CONFIG.domain,
    responseType: AUTH_CONFIG.responseType,
    redirectUri: AUTH_CONFIG.redirectUri
  });

  private loggedIn = new BehaviorSubject<boolean>(this.tokenIsValid());

  constructor(private httpClient: HttpClient, private router: Router) {}

  private tokenIsValid(): boolean {
    const token: string = localStorage.getItem('id_token');
    return !!token;
  }

  login() {
    this.myAuth0.authorize();
  }

  register() {}

  retrieveAuthInfoFromUrl() {
    this.myAuth0.parseHash((err, authResult) => {
      if (err) {
        console.log('Could not parse the hash: ', err);
      } else {
        if (authResult && authResult.idToken) {
          console.log('Authentication Successful. authResult: ', authResult);
          this.setSession(authResult);
          this.loggedIn.next(true);
        }
      }
    });
  }

  setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  logout() {
    localStorage.removeItem('expires_at');
    localStorage.removeItem('id_token');
    this.loggedIn.next(false);
    this.router.navigate(['/contact']);
  }

  get isLoggedIn(): Observable<boolean> {
    this.loggedIn.next(this.tokenIsValid());
    return this.loggedIn.asObservable();
  }
}
