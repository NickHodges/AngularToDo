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
  private rootURL: string = 'https://localhost:3000';

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);
  user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user));
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
    httpClient.get<User>(`${this.rootURL}/user`).subscribe(user => {
      const theUser = user ? user : UNDEFINED_USER;
      this.login(theUser);
      return this.userSubject.next(theUser);
    });
  }

  login(user: User) {
    this.isLoggedIn$.next(!(user === UNDEFINED_USER));
    this.userSubject.next(user);
  }

  logout(): Observable<any>  {
    return this.httpClient.post(`${this.rootURL}/logout`, null).pipe(
      shareReplay(),
      tap(() => {
        this.login(UNDEFINED_USER);
    
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
        this.login(user);
      })
    );
  }
}
