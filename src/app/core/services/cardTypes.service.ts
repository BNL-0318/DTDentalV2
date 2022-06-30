import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as models from 'src/app/core/models';
import { HttpService } from './http.service';
import * as enums from 'src/app/core/enums';
import * as constants from 'src/app/core/constants';
@Injectable({
  providedIn: 'root',
})
export class CardTypesService {
  constructor(private httpService: HttpService) {}

  getCardTypes(
    paginationInit: models.PaginationInit
  ): Observable<models.PartnerInfoPaged2> {
    const data = {
      ...paginationInit,
    };
    return this.httpService.sendToServer(
      enums.METHOD.GET,
      constants.API.CARDTYPES.GETCARDTYPES,
      data
    );
  }
}
