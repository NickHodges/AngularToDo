import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { map, shareReplay, tap, filter } from 'rxjs/operators';

export const UNDEFINED_USER: User = {
  id: '',
  email: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private rootURL: string = 'https://localhost:3000/users';

  private useSubject: BehaviorSubject<User> = new BehaviorSubject<User>(UNDEFINED_USER);
  user$: Observable<User> = this.useSubject.asObservable();
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
    this.login(UNDEFINED_USER);
  }

  login(user: User) {
    this.isLoggedIn$.next(!(user === UNDEFINED_USER));
    this.useSubject.next(user);
  }

  logout() {
    this.login(UNDEFINED_USER);
  }

  register(userName: string, password: string): Observable<User> {
    const theUser = { email: userName, password: password };
    return this.httpClient.post<User>(`${this.rootURL}`, theUser).pipe(
      shareReplay(),
      tap(user => {
        this.login(user);
      })
    );
  }
}
