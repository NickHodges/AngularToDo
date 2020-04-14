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

  private subject = new BehaviorSubject<User>(undefined);

  user$: Observable<User> = this.subject.asObservable().pipe(filter(user => !!user));
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
  //isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));
  //isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(private httpClient: HttpClient) {
    httpClient.get<User>(`${this.rootURL}/user`).subscribe(user => {
      return this.subject.next(user ? user : UNDEFINED_USER);
    });
  }

  private tokenAvailable(): boolean {
    return !!localStorage.getItem('token');
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
    localStorage.setItem('token', 'Here is a token!');
    this.loggedIn.next(true);
    return this.subject.next(user);
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
    return this.loggedIn.asObservable();
  }

  logout(): Observable<any> {
    return this.httpClient.post(`${this.rootURL}/logout`, null).pipe(
      shareReplay(),
      tap(user => {
        localStorage.removeItem('token');
        this.loggedIn.next(false);
        return this.subject.next(UNDEFINED_USER);
      })
    );
  }
}
