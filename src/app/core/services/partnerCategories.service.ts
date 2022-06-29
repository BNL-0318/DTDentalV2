import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as constants from '../constants';
import * as enums from '../enums';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class PartnerCategoriesService {

constructor(private httpService: HttpService) { }
postPartnercategories(): Observable<Array<object>> {
  return this.httpService.sendToServer(
    enums.METHOD.POST,
    constants.API.PARTNERCATEGORIES.AUTOCOMPLETE,
    {}
  );
}
}
