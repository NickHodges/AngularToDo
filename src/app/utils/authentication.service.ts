import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
  private rootURL: string = 'https://localhost:3000';

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  private tokenAvailable(): boolean {
    return !!localStorage.getItem('token');
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private setLoginValues(user: User) {
    localStorage.setItem('token', 'Here is a token!');
    this.loggedIn.next(true);
    return this.currentUserSubject.next(user);
  }

  login(username: string, password: string) {
    return this.httpClient.post<User>(`${this.rootURL}/login`, { email: username, password: password }).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.setLoginValues(user);
          return user;
        } else {
          this.loggedIn.next(false);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  register(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.rootURL}/users`, { email, password }).pipe(
      shareReplay(),
      tap(user => {
        return this.setLoginValues(user);
      })
    );
  }
}
