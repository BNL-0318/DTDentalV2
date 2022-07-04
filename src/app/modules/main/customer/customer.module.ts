import { ModalInfomationCustomerComponent } from './modal-infomation-customer/modal-infomation-customer.component';
import { SharedModule } from './../../../shared/shared.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.routing';
import { PopoverCategoriesComponent } from './popover-categories/popover-categories.component';

@NgModule({
  imports: [
    CustomerRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    PopoverCategoriesComponent,
    ModalInfomationCustomerComponent,
  ],
})
export class CustomerModule {}
