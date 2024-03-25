import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Meteo } from '../model/meteo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {



  constructor(private http: HttpClient) { }

  // Gérer les erreurs de manière générique
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }

   // Récupérer toutes les météos
   getAllMeteos(): Observable<Meteo[]> {
    return this.http.get<Meteo[]>('/meteo/all',
    httpOptions)   
      .pipe(
        catchError(this.handleError)
      );
  }
}
