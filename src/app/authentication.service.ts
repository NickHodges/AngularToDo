import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { map, shareReplay, tap } from 'rxjs/operators';

export const UNDEFINED_USER: User = {
  id: '',
  email: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private rootURL: string = 'http://localhost:3000/users';

  private subject: BehaviorSubject<User> = new BehaviorSubject<User>(UNDEFINED_USER);
  user$: Observable<User> = this.subject.asObservable();
  isLoggedIn: boolean = false;
  isLoggedOut: boolean = true;

  constructor(private httpClient: HttpClient) {
    this.isLoggedIn = false;
    this.isLoggedOut = true;
  }

  private setLoggedInInfo(user: User) {
    this.loadUser(user);
    this.isLoggedIn = user.id !== '';
    this.isLoggedOut = !this.isLoggedIn;
    this.subject.next(user);
  }

  loadUser(user: User) {
    this.subject.next(user);
  }

  login(userName: string, password: string) {}

  register(userName: string, password: string): Observable<User> {
    const theUser = { email: userName, password: password };
    console.log(theUser);

    return this.httpClient.post<User>(`${this.rootURL}`, theUser).pipe(
      shareReplay(),
      tap(user => {
        this.setLoggedInInfo(user);
      })
    );
  }

  logout() {
    console.log('logout fired');
    this.setLoggedInInfo(UNDEFINED_USER);
  }
}
