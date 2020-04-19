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
    console.log('authResult: ', authResult);
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult._id);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  register(email: string, password: string) {
    return this.httpClient.post<User>('/api/login', { email, password }).pipe(tap(res => this.setSession(res)));
  }

  login(email: string, password: string) {
    console.log('Logging in....');
    return this.httpClient.post<User>(`${this.rootURL}/login`, { email, password }).pipe(
      shareReplay(),
      tap(authResult => {
        console.log('authResult: ', authResult);
        return this.setSession(authResult);
      })
    );
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
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
