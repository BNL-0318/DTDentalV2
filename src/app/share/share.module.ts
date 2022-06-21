import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TDSMenuModule } from 'tds-ui/menu';

import { TDSAutocompleteModule } from 'tds-ui/auto-complete';
import { TDSFormFieldModule } from 'tds-ui/form-field';

import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSBadgeModule } from 'tds-ui/badges';
import { MenuComponent } from './layout/menu/menu.component';
import { GeneralInformationComponent } from './layout/general-information/general-information.component';
import { HeaderComponent } from './layout/header/header.component';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSButtonMenuModule } from 'tds-ui/button-menu';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSPaginationModule } from 'tds-ui/pagination';
import { PopconfirmDirective } from './widget/popconfirm.directive';
import { ReceiveCustomersComponent } from './layout/receive-customers/receive-customers.component';
import { TDSRadioModule } from 'tds-ui/radio';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { AppointmentListComponent } from './layout/appointment-list/appointment-list.component';
@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    GeneralInformationComponent,
    PopconfirmDirective,
    ReceiveCustomersComponent,
    AppointmentListComponent,
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
  ],
  exports: [
    MenuComponent,
    TDSMenuModule,
    TDSAutocompleteModule,
    TDSCheckBoxModule,
    TDSFormFieldModule,
    HeaderComponent,
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
  ],
})
export class ShareModule {}
