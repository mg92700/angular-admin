import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
 
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
       "/rest/auth/login",
      {
        email,
        password,
      },
      httpOptions
    ).pipe(
      tap(() => this.isLoggedInSubject.next(true)) // Met à jour l'état de connexion à true
    );
  }

 
}