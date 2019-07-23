import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../authservice.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { loginDetail } from 'src/app/Models/loginDetail';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login = new loginDetail();
  localStorageData: any;
  datasaved = false;
  submitted = false;
  msg: any;
  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthserviceService) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    this.login.email = this.loginForm.get('email').value;
    this.login.password = this.loginForm.get('password').value;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return false;
    } else {
      this.authservice.createLogin(this.login)
        .subscribe(data => {
          if (data.status == "success") {
            localStorage.setItem('isLoggedin', 'yes');
            localStorage.setItem('data', JSON.stringify(data));
            this.localStorageData = JSON.parse(localStorage.getItem('data'));
            this.router.navigate(['dashboard']);
          } else {
            this.msg = data.msg;
            this.datasaved = true;
          }
        });
    }
  }
}
