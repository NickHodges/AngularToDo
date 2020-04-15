import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';
import { shareReplay, tap, filter, map } from 'rxjs/operators';

export const UNDEFINED_USER: User = {
  id: '',
  password: '',
  email: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private rootURL: string = 'https://localhost:3000';

  private userSubject = new BehaviorSubject<User>(undefined);
  user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user));
  private loggedInSubject = new BehaviorSubject<boolean>(this.tokenAvailable());

  constructor(private httpClient: HttpClient) {
    httpClient.get<User>(`${this.rootURL}/user`).subscribe(user => {
      return this.userSubject.next(user ? user : UNDEFINED_USER);
    });
  }

  private tokenAvailable(): boolean {
    return !!localStorage.getItem('token'); // It doesn' really matter what the token is named
  }

  register(email: string, password: string) {
    return this.httpClient.post<User>(`${this.rootURL}/users`, { email, password }).pipe(
      shareReplay(),
      tap(user => {
        return this.setLoginValues(user);
      })
    );
  }

  private setLoginValues(user: User) {
    localStorage.setItem('token', 'Here is a token!'); // It doesn't matter what the token is.
    this.loggedInSubject.next(true);
    return this.userSubject.next(user);
  }

  login(email: string, password: string) {
    return this.httpClient.post<User>(`${this.rootURL}/login`, { email, password }).pipe(
      shareReplay(),
      tap(user => {
        return this.setLoginValues(user);
      })
    );
  }

  get isUserLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  logout(): Observable<any> {
    return this.httpClient.post(`${this.rootURL}/logout`, null).pipe(
      shareReplay(),
      tap(user => {
        return this.setLogoutValues();
      })
    );
  }

  private setLogoutValues() {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
    return this.userSubject.next(UNDEFINED_USER);
  }
}
