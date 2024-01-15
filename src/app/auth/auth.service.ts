import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn!: boolean;

  constructor() {
    this.loggedIn = localStorage.getItem('loggedIn') === 'true' ?? false
  }

  get isLoggedIn() {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
    localStorage.setItem('loggedIn', String(this.loggedIn));
  }

  logout() {
    this.loggedIn = false;
    localStorage.setItem('loggedIn', String(this.loggedIn));
  }
}
