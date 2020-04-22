// Taken from: https://stackblitz.com/edit/angular-auto-logout-v2?file=src%2Fapp%2Fautologout.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

const MINUTES_UNITL_AUTO_LOGOUT = 0.2; // in mins
const CHECK_INTERVAL = 5000; // in ms
const STORE_KEY = 'lastAction';

@Injectable({
  providedIn: 'root'
})
export class AutoLogoutService {
  constructor(private router: Router, private authService: AuthenticationService) {
    this.checkIfTimedOut();
    this.initEventListeners();
    this.initInterval();
    this.setLastAction(Date.now());
  }

  private getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
  private setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  private initEventListeners() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  private reset() {
    this.setLastAction(Date.now());
  }

  private initInterval() {
    setInterval(() => {
      this.checkIfTimedOut();
    }, CHECK_INTERVAL);
  }

  private checkIfTimedOut() {
    const now = Date.now();
    const timeLeft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeLeft - now;
    const isTimeout = diff < 0;

    if (isTimeout) {
      this.logoutTheUser();
    }
  }

  private logoutTheUser() {
    localStorage.removeItem(STORE_KEY);
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
