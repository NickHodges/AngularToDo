import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { map, shareReplay, tap, filter } from 'rxjs/operators';

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

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);
  user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user));
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
    httpClient.get<User>(`${this.rootURL}/user`).subscribe(user => {
      const theUser = user ? user : UNDEFINED_USER;
      this.trackLoginInfo(theUser);
      return this.userSubject.next(theUser);
    });
  }

  trackLoginInfo(user: User) {
    this.isLoggedIn$.next(!(user === UNDEFINED_USER));
    this.userSubject.next(user);
  }

  logout(): Observable<any> {
    return this.httpClient.post(`${this.rootURL}/logout`, null).pipe(
      shareReplay(),
      tap(() => {
        this.trackLoginInfo(UNDEFINED_USER);
      })
    );
  }

  userIsLoggedIn(): boolean {
    return this.isLoggedIn$.value;
  }

  register(userName: string, password: string): Observable<User> {
    const theUser = { email: userName, password: password };
    return this.httpClient.post<User>(`${this.rootURL}/users`, theUser).pipe(
      shareReplay(),
      tap(user => {
        this.trackLoginInfo(user);
      })
    );
  }

  login(userName: string, password: string): Observable<User> {
    const theUser: User = { email: userName, password: password };
    return this.httpClient.post<User>(`${this.rootURL}/login`, theUser).pipe(
      shareReplay(),
      tap(user => {
        this.trackLoginInfo(user);
      })
    );
  }
}
