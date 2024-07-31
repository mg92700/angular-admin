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

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
       "/rest/auth/login",
      {
        email,
        password,
      },
      httpOptions
    ).pipe(
      tap(response => {
        // Assurez-vous d'accéder à la bonne propriété de la réponse
        const token = response.token; // Ajustez ici en fonction de la structure de votre réponse
        if (token) {
          localStorage.setItem('authToken', token);
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isLoggedInSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
 
 
}

export interface AuthResponse {
  token: string;
  // Ajoutez d'autres propriétés ici si nécessaire
}