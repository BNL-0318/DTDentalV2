import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit(): void {}
  getErrorMessage(email: any) {
    if (email.hasError('required')) {
      return 'Vui lòng nhập Email';
    }
    return email.hasError('email') ? 'Vui lòng nhập Email' : '';
  }
  onSubmit(): void {
   
  }
}
