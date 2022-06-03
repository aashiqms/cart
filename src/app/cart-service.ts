import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => error);
 }

  getProducts(): Observable<any> {
    let serviceUrl = `https://dummyjson.com/products?limit=100`;
    return this.httpClient.get<any>(serviceUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }

    private cartMethodSource = new Subject<any>();

    cartMethodCalled$ = this.cartMethodSource.asObservable();


  callCartMethod(item: any) {
    this.cartMethodSource.next(item);
  }


}
