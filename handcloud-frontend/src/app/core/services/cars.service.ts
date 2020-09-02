import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Car } from '@app/shared/models/car.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  getAll(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/cars`, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  get(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/cars/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  put(car: Car): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/cars/${car.id}`, JSON.stringify(car), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  post(car: Car): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/cars`, JSON.stringify(car), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiUrl}/cars/${id}`, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: any): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.snackBar.open(errorMessage);
    return throwError(errorMessage);
  }
}
