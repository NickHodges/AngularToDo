import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';



@Injectable({ providedIn: 'root' })
export class UserService {
  private rootURL: string = 'https://localhost:3000';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${this.rootURL}/users`);
  }
}
  