import { PaginationInit } from './../../../core/models/pagination.model';
import { CustomerService } from './../../../core/services/customer.service';
import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  public listSelected = [5, 6];
  public listData = [
    { id: 1, name: 'Biến đổi' },
    { id: 2, name: 'Thoải mái' },
    { id: 3, name: 'Khách hàng tiềm năng' },
    { id: 4, name: 'Khách thân thiện' },
    { id: 5, name: 'Khó phục vụ' },
    { id: 6, name: 'Khách thân thiết' },
  ];
  pagination: PaginationInit = {
    limit: 20,
    offset: 0,
  };
  constructor(private CustomerService: CustomerService) {}

  ngOnInit(): void {
    this.CustomerService.postCustomer(this.pagination, {
      isActive: true,
    }).subscribe((x) => {
      console.log(x);
    });
  }
  onModelChange(e: TDSSafeAny) {
    console.log(e);
  }
}
