import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSMenuModule } from 'tds-ui/menu';

import { TDSAutocompleteModule } from 'tds-ui/auto-complete';
import { TDSFormFieldModule } from 'tds-ui/form-field';

import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSButtonMenuModule } from 'tds-ui/button-menu';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSPaginationModule } from 'tds-ui/pagination';
import { TDSRadioModule } from 'tds-ui/radio';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { AppointmentListComponent } from './component-shared/appointment-list/appointment-list.component';

import { GeneralInformationComponent } from './component-shared/general-information/general-information.component';
import { InputSearchComponent } from './component-shared/input-search/input-search.component';
import { ReceiveCustomersComponent } from './component-shared/receive-customers/receive-customers.component';
import { PopconfirmDirective } from './widget/directives/popconfirm.directive';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { TDSTableModule } from "tds-ui/table";
import { TDSProgressModule } from "tds-ui/progress";



@NgModule({
  declarations: [
    GeneralInformationComponent,
    PopconfirmDirective,
    ReceiveCustomersComponent,
    AppointmentListComponent,
    InputSearchComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    TDSMenuModule,
    TDSAutocompleteModule,
    TDSFormFieldModule,
    TDSDropDownModule,
    TDSSelectModule,
    ReactiveFormsModule,
    TDSHeaderModule,
    TDSAvatarModule,
    TDSBadgeModule,
    TDSTagModule,
    FormsModule,
    TDSInputModule,
    TDSButtonMenuModule,
    TDSButtonModule,
    TDSTabsModule,
    TDSPaginationModule,
    TDSRadioModule,
    TDSCheckBoxModule,
    TDSTableModule,
    TDSProgressModule
  ],
  exports: [
    TDSMenuModule,
    TDSAutocompleteModule,
    TDSCheckBoxModule,
    TDSFormFieldModule,
    TDSDropDownModule,
    TDSSelectModule,
    GeneralInformationComponent,
    TDSHeaderModule,
    TDSAvatarModule,
    TDSBadgeModule,
    TDSInputModule,
    TDSTagModule,
    TDSButtonMenuModule,
    TDSButtonModule,
    TDSTabsModule,
    TDSPaginationModule,
    PopconfirmDirective,
    ReceiveCustomersComponent,
    TDSRadioModule,
    AppointmentListComponent,
    InputSearchComponent,
    HeaderComponent,
    MenuComponent,
    TDSTableModule,
    TDSProgressModule
  ],
})
export class ShareModule {}
