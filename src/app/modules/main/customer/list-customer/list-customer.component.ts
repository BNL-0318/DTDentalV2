import { Component, OnInit } from '@angular/core';
import { RandomUser } from 'src/app/core/models/customer.model';
import { RandomUserService } from 'src/app/core/services/RandomUserService.service';
import { TDSTableQueryParams } from 'tds-ui/table';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  total = 1;
  listOfRandomUser: RandomUser[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.randomUserService
      .getUsers(pageIndex, pageSize, sortField, sortOrder, filter)
      .subscribe((data) => {
        this.loading = false;
        this.total = 200; // mock the total data here
        this.listOfRandomUser = data.results;
      });
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }
}
