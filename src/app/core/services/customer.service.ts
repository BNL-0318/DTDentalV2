import { PaginationInit } from './../models/pagination.model';
import { PAGINATION_INIT } from './../constants/constants';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { METHOD } from '../enums/enum';
import { API } from '../constants/api.const';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpService: HttpService) {}
  postCustomer(PAGINATION_INIT: PaginationInit, filter: any): Observable<any> {
    const data = {
      ...PAGINATION_INIT,
      ...filter,
    };
    return this.httpService.sendToServer(METHOD.GET, API.CUSTOMER, data);
  }
}
