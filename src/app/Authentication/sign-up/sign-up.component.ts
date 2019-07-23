import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl} from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthserviceService } from '../../authservice.service';
import { signupDetail } from 'src/app/Models/signupDetail';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder, private router: Router,  private authservice:AuthserviceService) { }
  signupForm:FormGroup;
  signup = new signupDetail();
  datasaved=false;
  submitted = false;
  msg:any;

  ngOnInit() {
    this.signupForm = this.fb.group({
      device_type:['angular'],
      salon_name:['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      passwordMatch: this.fb.group({
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]]
      }, { validator: this.passwordMatch }),
           
          })
  }

  //Password matching start

  passwordMatch(control: AbstractControl): { [key: string]: any } | null {
    var password = control.get('password');
    var confirm_password = control.get('confirm_password');

    if (password.value == confirm_password.value) {
      return null;
    } else {
      return { passwordMatch: true };
    }
  }
  //Password matching end

  onSignup(){

this.signup.device_type= this.signupForm.get('device_type').value;
 this.signup.salon_name= this.signupForm.get('salon_name').value;
    this.signup.email= this.signupForm.get('email').value;
    this.signup.password= this.signupForm.get('passwordMatch').get('password').value;
    this.signup.confirm_password= this.signupForm.get('passwordMatch').get('confirm_password').value;


    this.authservice.createSignup(this.signup)
    .subscribe(data=>{
    console.log(data);
    if (data.status =="error"){
      this.msg = data.msg;
      this.datasaved=true;
    return false;
      }
      else {
    
      this.router.navigate(['signup-step1-success'])
     }
    });
  }
}
