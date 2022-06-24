import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { METHOD } from '../enums/enum';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly URL = environment.endPoint;
  private httpOptions = {
    headers: new HttpHeaders({
      'Data-type': 'json',
      'Content-type': 'application/json;charset=utf-8',
      'Accept-Language': 'vi',
      'Access-Control-Allow-Origin': '*',
    }),
    withCredentials: false,
  };
  constructor(private httpClient: HttpClient) {}
  public sendToServer<T>(
    method: METHOD,
    uri: string,
    data?: any
  ): Observable<T> {
    const url = this.URL + uri;
    let res: Observable<T>;
    switch (method) {
      case METHOD.GET: {
        data = data || {};
        const keys = Object.keys(data);
        keys.forEach((key) => {
          if (
            data[key] === null ||
            typeof data[key] === 'undefined' ||
            data[key] === ''
          ) {
            delete data[key];
          }
        });
        res = this.httpClient
          .get<any>(url, {
            params: data,
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            withCredentials: false,
          })
          .pipe(catchError(this.handleError));
        break;
      }
      // case METHOD.POST: {
      //   res = this.httpClient
      //     .post<any>(url, data, this.httpOptions)
      //     .pipe(catchError(this.handleError));
      //   break;
      // }
      case METHOD.PUT: {
        res = this.httpClient
          .put<any>(url, data, this.httpOptions)
          .pipe(catchError(this.handleError));
        break;
      }
      case METHOD.PATCH: {
        res = this.httpClient
          .patch<any>(url, data, this.httpOptions)
          .pipe(catchError(this.handleError));
        break;
      }
      case METHOD.DELETE: {
        res = this.httpClient
          .delete<any>(url, this.httpOptions)
          .pipe(catchError(this.handleError));
        break;
      }
      default:
        res = this.httpClient
          .post<any>(url, data, this.httpOptions)
          .pipe(catchError(this.handleError));
        break;
    }

    return res;
  }
  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
