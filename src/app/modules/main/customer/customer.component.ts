import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, timer } from 'rxjs';
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
  isFollowCustomer = false;
  numberFilter = 1;
  basicDisplayOptions?: Array<string>;
  customListDisplay = constants.CUSTOMLISTDISPLAYCUSTOMER;
  isVisiblePartners = false;
  displayOptions = constants.VALUETABLECUSTOMER;
  isVisibleRadioStatus = false;
  dataRadioStatus?: Array<models.FilterStatus>;
  inputSearch = new FormControl('');
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
    // check behavior has data or not then process and add data to basicDisplayOptions
    this.behaviorService.partners_grid_visible_columns$.subscribe(
      (partners_grid_visible_columns) => {
        if (partners_grid_visible_columns.length <= 2) {
          this.updateValueHeaderTable(constants.BASICDISPLAYOPTIONS);
        } else {
          this.basicDisplayOptions = JSON.parse(
            partners_grid_visible_columns.replace(/'/g, '"')
          );
          console.log(this.basicDisplayOptions);
          this.customListDisplay.map((item) => {
            this.basicDisplayOptions?.includes(item.key)
              ? (item.isChecked = true)
              : (item.isChecked = false);
          });
        }
      }
    );
    // handle inputsearch with delay
    this.inputSearch.valueChanges
      .pipe(
        debounceTime(600),
        switchMap((value) =>
          this.partnersService.getListDataCustomer(
            this.pagination,
            (this.filter = {
              ...this.filter,
              search: value,
            })
          )
        )
      )
      .subscribe((dataListCustomer) => {
        this.syncCustomerData(dataListCustomer);
      });
  }
  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.getListDataCustomer(params);
  }

  // change select categories and categIds
  onSelectChange(e: TDSSafeAny): void {
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
      .subscribe((dataListCustomer: models.PartnerInfoPaged2) => {
        this.syncCustomerData(dataListCustomer);
      });
  }
  // add data to template from API
  syncCustomerData(dataListCustomer: models.PartnerInfoPaged2): void {
    this.loading = false;
    this.listDataCustomer = dataListCustomer;
    this.total = dataListCustomer.totalItems;
    this.pageIndex = dataListCustomer.offset + 1;
    this.pageSize = dataListCustomer.limit;
  }
  // nav change OrderState
  iChangenavOrderState(i: models.CommonTypeData): void {
    this.filter = Object.assign(this.filter, { orderState: i.value });
    this.getListDataCustomer();
  }
  // handle when the value of the customer popover changes
  valuePopoverCatergoriesChange(i: Array<object>, id: string): void {
    const data = { id, tagIds: i };
    this.partnersService.UpdateTagsCustomer(data).subscribe((x) => {
      this.getListDataCustomer();
    });
  }

  // filter popover radio status
  filterRadioStatus(dataRadioStatus: Array<models.FilterStatus>): void {
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

  //update value header table customer
  updateValueHeaderTable(listItem: Array<string>): void {
    this.basicDisplayOptions = listItem;
    this.behaviorService.changeItemPartenrs(
      JSON.stringify(this.basicDisplayOptions)
    );
  }
  // save processed data header table customer
  saveAction(): void {
    this.isVisiblePartners = false;
    let changeDisplayOptions: Array<string> = ['name', 'ref', 'id'];
    this.customListDisplay.filter((item) => {
      if (item.isChecked) {
        changeDisplayOptions.push(item.key);
      }
    });
    this.updateValueHeaderTable(changeDisplayOptions);
  }

  handleOkFollowCustomer(id: string) {
    console.log(id);
  }
}
