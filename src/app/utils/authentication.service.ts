import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { User } from '../models/user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private loggedIn = new BehaviorSubject<boolean>(this.tokenIsValid());
  private rootURL: string = 'https://localhost:3000';
  private currUser: string = 'currentUser';

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.currUser)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    if (this.currentUserSubject) {
      return this.currentUserSubject.value;
    } else {
      return null;
    }
  }

  get isLoggedIn(): Observable<boolean> {
    this.loggedIn.next(this.tokenIsValid());
    return this.loggedIn.asObservable();
  }

  private tokenIsValid(): boolean {
    let currentUser: User = this.currentUserValue;
    if (currentUser) {
      const token = currentUser.token;
      const tokenInfo = this.getDecodedAccessToken(token);
      if (tokenInfo) {
        if (Date.now() <= tokenInfo.exp * 1000) {
          return true;
        }
      }
    }
    return false;
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  private setLoginValues(user: User) {
    this.loggedIn.next(true);
    return this.currentUserSubject.next(user);
  }

  login(username: string, password: string) {
    return this.httpClient.post<User>(`${this.rootURL}/login`, { email: username, password: password }).pipe(
      map(user => {
        if (user) {
          localStorage.setItem(this.currUser, JSON.stringify(user));
          this.setLoginValues(user);
          return user;
        } else {
          this.loggedIn.next(false);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this.currUser);
    this.currentUserSubject.next(null);
    this.loggedIn.next(false);
  }

  register(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.rootURL}/users`, { email: email, password: password }).pipe(
      shareReplay(),
      tap(user => {
        localStorage.setItem(this.currUser, JSON.stringify(user));
        return this.setLoginValues(user);
      })
    );
  }
}
