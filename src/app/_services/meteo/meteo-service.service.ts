import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Meteo } from '../model/meteo';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private apiUrl = '/meteo/all';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
  };

  constructor(private http: HttpClient) { }


  // Récupérer toutes les météos
  getAllMeteos(): Observable<Meteo[]> {
    return this.http.get<Meteo[]>(this.apiUrl, this.httpOptions)
      .pipe(
       
      );
  }
}
