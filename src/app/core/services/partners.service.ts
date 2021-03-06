import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import * as models from 'src/app/core/models';
import * as constants from '../constants';
import * as enums from '../enums';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  orderState = {
    sale: 'Đang điều trị',
    draft: 'Chưa phát sinh',
  };
  constructor(private httpService: HttpService) {}
  getListDataCustomer(
    paginationInit: models.PaginationInit,
    filter: object
  ): Observable<models.PartnerInfoPaged2> {
    const data = {
      ...paginationInit,
      ...filter,
    };
    return this.httpService
      .sendToServer(
        enums.METHOD.GET,
        constants.API.PARTNERS.GETPARTNERINFOPAGED2,
        data
      )
      .pipe(
        map((data: models.PartnerInfoPaged2 | any) => {
          const items = data.items.map((i: models.IPartnerInfoPaged2) => {
            return {
              ...i,
              valueOrderState:
                i.orderState === 'sale'
                  ? this.orderState.sale
                  : this.orderState.draft,
            };
          });
          return { ...data, items: items };
        })
      );
  }

  UpdateTagsCustomer(data: object): Observable<Array<object>> {
    return this.httpService.sendToServer(
      enums.METHOD.POST,
      constants.API.PARTNERS.UPDATETAGS,
      data
    );
  }
}
