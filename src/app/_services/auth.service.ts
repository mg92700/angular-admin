import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<any> {
    return this.http.post(
       "/rest/auth/login",
      {
        email,
        password,
      },
      httpOptions
    );
  }

 
  setIsLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

}