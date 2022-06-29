import { Component, OnInit } from '@angular/core';
import * as models from 'src/app/core/models';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import * as constants from 'src/app/core/constants';
import { PartnersService } from 'src/app/core/services/partners.service';
import { PartnerCategoriesService } from 'src/app/core/services/partnerCategories.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  searchAll = '';
  isOpenFilterSelect = false;
  listDataCustomer?: models.PartnerInfoPaged2;
  filterOrderState = constants.filterOrderState;
  pagination: models.PaginationInit = constants.PAGINATION_INIT;
  filter = {
    isActive: true,
  };
  total = 0;
  pageSize = 20;
  pageIndex = 1;
  loading = true;

  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.postListDataCustomer(params);
  }

  public dataPartnercategories?: Array<object>;

  constructor(
    private partnersService: PartnersService,
    private partnerCategoriesService: PartnerCategoriesService
  ) {}

  ngOnInit(): void {
    // loading select categorie
    this.partnerCategoriesService
      .postPartnercategories()
      .subscribe(
        (dataPartnercategories: Array<object>) =>
          (this.dataPartnercategories = dataPartnercategories)
      );
  }
  // change select categories and categIds
  onSelectChange(e: TDSSafeAny) {
    this.isOpenFilterSelect = false;
    this.filter = Object.assign(this.filter, { categIds: e[0] });
    this.postListDataCustomer();
  }
  // function reload list data customer to template
  postListDataCustomer(params?: TDSTableQueryParams): void {
    this.loading = true;
    if (params) {
      this.pagination = {
        limit: params.pageSize,
        offset: params.pageIndex - 1,
      };
      params.sort.map((item) => {
        if (item.value !== null) {
          const key = item.key;
          this.filter = Object.assign(
            this.filter,
            { key: item.value },
            params.filter
          );
        }
      });
    }
    this.partnersService
      .postListDataCustomer(this.pagination, this.filter)
      .subscribe((dataListCustomer) => {
        this.loading = false;
        this.listDataCustomer = dataListCustomer;
        this.total = dataListCustomer.totalItems;
        this.pageIndex = dataListCustomer.offset + 1;
        this.pageSize = dataListCustomer.limit;
      });
  }

  // nav change OrderState
  iChangenavOrderState(i: any) {
    this.filter = Object.assign(this.filter, { orderState: i.value });
    this.postListDataCustomer();
  }

  valuePopoverCatergoriesChange(i: Array<object>, id: string) {
    const data = { id, tagIds: i };
    this.partnersService.UpdateTagsCustomer(data).subscribe((x) => {
      this.postListDataCustomer();
    });
  }

  // change input search automatic
  switchedChange(i: any) {
    console.log(i);
  }
}
