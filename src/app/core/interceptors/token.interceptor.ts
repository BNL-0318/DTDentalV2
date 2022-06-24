import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: any = localStorage.getItem('access-token');
    if (token != null) {
      const headers = new HttpHeaders()
        .set('access-token', token)
        .set('Authorization', 'bearer ' + token);
      const AuthRequest = request.clone({ headers: headers });
      return next.handle(AuthRequest);
    } else {
      return next.handle(request);
    }
  }
}
