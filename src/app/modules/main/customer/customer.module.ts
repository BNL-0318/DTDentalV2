import { SharedModule } from './../../../shared/shared.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.routing';
import { PopoverCategoriesComponent } from './popover-categories/popover-categories.component';

@NgModule({
  imports: [CustomerRoutingModule, CommonModule, SharedModule, FormsModule, ],
  declarations: [CustomerComponent, CustomerDetailsComponent, PopoverCategoriesComponent],
})
export class CustomerModule {}
