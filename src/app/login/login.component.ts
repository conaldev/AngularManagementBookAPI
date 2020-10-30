import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  // tslint:disable-next-line:typedef
  login() {
    const data = this.loginForm.value;
    let currentUser = this.userService.findUserByEmailAndPassword(data);
    if (currentUser !== -1) {
      window.localStorage.setItem('userLogin', JSON.stringify(data));
      this.router.navigate(['books']);
    } else {
      this.message = 'Tài khoản hoặc mật khẩu không đúng !';
      this.router.navigate(['login']);
    }
  }
}
