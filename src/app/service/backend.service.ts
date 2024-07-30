import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllRequest } from '../model/backend.model';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}
  private mainUrl: string = '/api';

  public searchAll(req: AllRequest) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    // return this.http.get(
    //   `${this.mainUrl}/zh-tw/Attractions/All?page=${req.page}`,
    //   {
    //     headers,
    //   }
    // );

    const url = `${this.mainUrl}/zh-tw/Attractions/All?page=${req.page}`;
    console.log('Request URL:', url); // Log the URL
    return this.http.get(url, { headers }).pipe(
      tap((response) => console.log('Response:', response)), // Log the response
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(error);
      })
    );
  }
}
