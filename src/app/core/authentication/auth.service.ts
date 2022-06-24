import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { METHOD } from '../enums/enum';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  istoken = false;
  private _token$ = new BehaviorSubject('');
  account: any;
  constructor(private httpService: HttpService) {
    const token = localStorage.getItem('access-token');
    if (token) {
      this._token$.next(token);
    }
  }
  signInPassword(data: any): Observable<any> {
    this.account = data;
    return this.httpService
      .sendToServer(METHOD.POST, 'Account/Login', data)
      .pipe(
        tap((req: any) => {
          this.setToken(req.token);
        })
      );
  }
  public setToken(token: string): void {
    if (!token) {
      this.removeToken();
      return;
    }
    localStorage.setItem('access-token', token);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    this.istoken = !isExpired;
    // console.log('decodedToken', decodedToken);
    // console.log('expirationDate', expirationDate);
    // console.log('isExpired', isExpired);
  }
  removeToken() {
    localStorage.removeItem('token');
    this.istoken = false;
  }
  
}
