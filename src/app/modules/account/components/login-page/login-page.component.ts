import { UserLogin } from './../../../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    this.AuthService.signInPassword({
      rememberMe: false,
      ...this.loginForm.value,
    }).subscribe((UserLogin: UserLogin) => {
      if (UserLogin.succeeded) {
        this.router.navigate(['']);
      }
      else{
        alert("Tài khoản hoặc mật khẩu không chính xác"); 
      }
    });
  }
}
