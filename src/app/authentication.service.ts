import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { map, shareReplay, tap } from 'rxjs/operators';

export const UNDEFINED_USER: User = {
  id: undefined,
  email: ''
};

// do (user => this.subject.next(user)

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private rootURL: string = 'http://localhost:3000/users';
  private subject: BehaviorSubject<User> = new BehaviorSubject<User>(UNDEFINED_USER);
  user$: Observable<User> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(private httpClient: HttpClient) {}

  login(userName: string, password: string) {}

  register(userName: string, password: string) {
    return this.httpClient.post<User>(`${this.rootURL}`, { name: userName, password: password }).pipe(
      shareReplay(),
      tap(user => this.subject.next(user))
    );
  }

  logout() {}
}
