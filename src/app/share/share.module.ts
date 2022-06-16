import { ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [MenuComponent, HeaderComponent, GeneralInformationComponent],
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
    TDSBadgeModule
  ],
  exports: [
    MenuComponent,
    TDSMenuModule,
    TDSAutocompleteModule,
    TDSFormFieldModule,
    HeaderComponent,
    TDSDropDownModule,
    TDSSelectModule,
    GeneralInformationComponent,
    TDSHeaderModule,
    TDSAvatarModule,
    TDSBadgeModule
  ],
})
export class ShareModule {}
