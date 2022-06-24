import { ShareModule } from './../../share/share.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ShareModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    AccountComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    ForgotPasswordComponent,
  ],
})
export class AccountModule {}
