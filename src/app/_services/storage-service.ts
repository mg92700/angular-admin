import { Injectable } from '@angular/core';
const USER_EMAIL = 'email';
const USER_KEY = 'token';
const USER_ROLE = 'role';

@Injectable({
  providedIn: 'root'
})
export default class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_EMAIL);
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(USER_ROLE);
    window.sessionStorage.setItem(USER_EMAIL, JSON.stringify(user));
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    window.sessionStorage.setItem(USER_ROLE, JSON.stringify(user));

  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
