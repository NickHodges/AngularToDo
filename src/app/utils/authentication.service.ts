import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { shareReplay, tap, filter, map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private rootURL: string = 'https://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  register(email: string, password: string) {
    return this.httpClient.post<User>(`${this.rootURL}/users`, { email, password }).pipe(
      shareReplay(),
      tap(user => {
        return this.setSession;
      })
    );
  }

  login(email: string, password: string) {
    return this.httpClient.post<User>(`${this.rootURL}/login`, { email, password }).pipe(
      shareReplay(),
      tap(user => {
        return this.setSession;
      })
    );
  }

  get isUserLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }
}
