import { ButtonRadioStatusComponent } from './component-shared/button-radio-status/button-radio-status.component';
import { ManipulationComponent } from './component-shared/manipulation/manipulation.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSMenuModule } from 'tds-ui/menu';
import { NavFilterComponent } from './component-shared/nav-filter/nav-filter.component';
import { SearchAutomaticComponent } from './component-shared/search-automatic/search-automatic.component';

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

import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { TDSProgressModule } from 'tds-ui/progress';
import { TDSTableModule } from 'tds-ui/table';
import { GeneralInformationComponent } from './component-shared/general-information/general-information.component';
import { ReceiveCustomersComponent } from './component-shared/receive-customers/receive-customers.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { PopconfirmDirective } from './widget/directives/popconfirm.directive';
import { TDSPopoverModule } from 'tds-ui/popover';
import { LabelCategoriesDirective } from './widget/directives/label-categories.directive';
import { FilterColPipe } from './widget/pipes/filter-col.pipe';

@NgModule({
  declarations: [
    GeneralInformationComponent,
    PopconfirmDirective,
    ReceiveCustomersComponent,
    AppointmentListComponent,
    HeaderComponent,
    MenuComponent,
    NavFilterComponent,
    SearchAutomaticComponent,
    LabelCategoriesDirective,
    ManipulationComponent,
    ButtonRadioStatusComponent,
    FilterColPipe,
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
    TDSProgressModule,
    TDSPageHeaderModule,
    TDSPopoverModule,
  ],
  exports: [
    NavFilterComponent,
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
    HeaderComponent,
    MenuComponent,
    TDSTableModule,
    TDSProgressModule,
    TDSPageHeaderModule,
    TDSPopoverModule,
    SearchAutomaticComponent,
    LabelCategoriesDirective,
    ManipulationComponent,
    ButtonRadioStatusComponent,
    FilterColPipe,

  ],
})
export class SharedModule {}
