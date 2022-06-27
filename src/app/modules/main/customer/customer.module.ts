import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.routing';
import { ListCustomerComponent } from './list-customer/list-customer.component';

@NgModule({
  imports: [CustomerRoutingModule, CommonModule, ShareModule, FormsModule],
  declarations: [CustomerComponent, ListCustomerComponent],
})
export class CustomerModule {}
