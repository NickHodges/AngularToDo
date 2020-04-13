import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { shareReplay, tap, filter } from 'rxjs/operators';

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
  private currentUser: User;

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);
  user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user));
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
    httpClient.get<User>(`${this.rootURL}/user`).subscribe(user => {
      const theUser = user ? user : UNDEFINED_USER;
      this.setLoginInfo(theUser, user !== UNDEFINED_USER);
      return this.userSubject.next(theUser);
    });
  }

  setLoginInfo(user: User, loggedIn: boolean) {
    console.log('flew threw setLoginInfo, and user is: ', user);
    this.isLoggedIn$.next(loggedIn);
    this.userSubject.next(user);
    this.currentUser = loggedIn ? user : UNDEFINED_USER;
  }

  logout(): Observable<any> {
    return this.httpClient.post(`${this.rootURL}/logout`, null).pipe(
      shareReplay(),
      tap(() => {
        this.setLoginInfo(UNDEFINED_USER, false);
      })
    );
  }

  userIsLoggedIn(): boolean {
    return this.currentUser !== UNDEFINED_USER;
  }

  register(userName: string, password: string): Observable<User> {
    const theUser = { email: userName, password: password };
    return this.httpClient.post<User>(`${this.rootURL}/users`, theUser).pipe(
      shareReplay(),
      tap(user => {
        this.setLoginInfo(user, user.email !== '');
      })
    );
  }

  login(userName: string, password: string): Observable<User> {
    const theUser: User = { email: userName, password: password };
    return this.httpClient.post<User>(`${this.rootURL}/login`, theUser).pipe(
      shareReplay(),
      tap(user => {
        this.setLoginInfo(user, user.email !== '');
      })
    );
  }
}
