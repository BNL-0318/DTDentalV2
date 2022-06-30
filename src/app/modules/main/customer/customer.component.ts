import { Component, OnInit } from '@angular/core';
import * as constants from 'src/app/core/constants';
import * as models from 'src/app/core/models';
import { BehaviorService } from 'src/app/core/services/behavior.service';
import { PartnerCategoriesService } from 'src/app/core/services/partnerCategories.service';
import { PartnersService } from 'src/app/core/services/partners.service';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { CardTypesService } from './../../../core/services/cardTypes.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  basicDisplayOptions = [
    'displayName',
    'phone',
    'dateOfBirth',
    'age',
    'valueOrderState',
    'orderResidual',
    'totalDebit',
    'cardTypeName',
    'categories',
    'companyName',
    'manipulation',
    'name',
    'ref'
  ];
  isVisiblePartners = false;
  displayOptions = constants.VALUETABLECUSTOMER;
  isVisibleRadioStatus = false;
  dataRadioStatus?: Array<models.FilterStatus>;
  searchAll = '';
  isOpenFilterSelect = false;
  listDataCustomer?: models.PartnerInfoPaged2;
  filterOrderState = constants.FILTERORDERSTATE;
  pagination: models.PaginationInit = constants.PAGINATION_INIT;
  filter = {};
  total = 0;
  pageSize = 20;
  pageIndex = 1;
  loading = true;
  dataPartnercategories?: Array<object>;

  constructor(
    private partnersService: PartnersService,
    private partnerCategoriesService: PartnerCategoriesService,
    private cardTypesService: CardTypesService,
    private behaviorService: BehaviorService
  ) {}

  ngOnInit(): void {
    // loading select categorie
    this.partnerCategoriesService
      .postPartnercategories()
      .subscribe((dataPartnercategories: Array<object>) => {
        this.dataPartnercategories = dataPartnercategories;
      });

    // load data filter popover
    this.cardTypesService
      .getCardTypes(constants.PAGINATION_INIT)
      .subscribe((x) => {
        const cardTypeIds: models.FilterStatus = {
          titleFil: 'THẺ THÀNH VIÊN',
          key: 'cardTypeIds',
          defaultValue: null,
          data: x.items.map((item) => {
            return { title: item.name, value: item.id };
          }),
        };
        this.dataRadioStatus = [
          constants.TRACKINGSTATUS,
          constants.REVENUEEXPECT,
          constants.DEBT,
          cardTypeIds,
        ];
      });
    //load data filter partners_grid_visible_columns on local storage
    this.behaviorService.changeItemPartenrs(
      JSON.stringify(this.basicDisplayOptions)
    );
  }
  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.getListDataCustomer(params);
  }
  // change select categories and categIds
  onSelectChange(e: TDSSafeAny) {
    this.isOpenFilterSelect = false;
    this.filter = Object.assign(this.filter, { categIds: e[0] });
    this.getListDataCustomer();
  }
  // function reload list data customer to template
  getListDataCustomer(params?: TDSTableQueryParams): void {
    this.loading = true;
    if (params) {
      this.pagination = {
        limit: params.pageSize,
        offset: params.pageIndex - 1,
      };
      params.sort.map((item) => {
        if (item.value !== null) {
          this.filter = Object.assign(
            this.filter,
            { [item.key]: item.value },
            params.filter
          );
        }
      });
    }

    this.partnersService
      .getListDataCustomer(this.pagination, this.filter)
      .subscribe((dataListCustomer) => {
        this.loading = false;
        this.listDataCustomer = dataListCustomer;
        this.total = dataListCustomer.totalItems;
        this.pageIndex = dataListCustomer.offset + 1;
        this.pageSize = dataListCustomer.limit;
      });
  }

  // nav change OrderState
  iChangenavOrderState(i: models.CommonTypeData) {
    this.filter = Object.assign(this.filter, { orderState: i.value });
    this.getListDataCustomer();
  }

  valuePopoverCatergoriesChange(i: Array<object>, id: string) {
    const data = { id, tagIds: i };
    this.partnersService.UpdateTagsCustomer(data).subscribe((x) => {
      this.getListDataCustomer();
    });
  }

  // change input search automatic
  switchedChange(i: any) {
    console.log(i);
  }

  // filter popover radio status
  filterRadioStatus(dataRadioStatus: Array<models.FilterStatus>) {
    dataRadioStatus.forEach((item) => {
      if (item.valueFil !== null && item.valueFil !== undefined) {
        Object.assign(this.filter, { [item.key]: item.valueFil });
      }
      if (item.valueFil === null) {
        this.filter = { ...this.filter, [item.key]: undefined };
      }
    });
    this.getListDataCustomer();
  }
}
