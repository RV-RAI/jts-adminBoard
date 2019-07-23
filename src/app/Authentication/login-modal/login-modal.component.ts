import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../authservice.service';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { forgatpasswordDetail } from 'src/app/Models/forgatpasswordDetail';
import { Routes, RouterModule, Router } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  forgatpasswordForm:FormGroup;
  forgat = new forgatpasswordDetail();

  datasaved=false;
  submitted=false;
  msg:any;
  
  constructor(private fb: FormBuilder, private router: Router, private authservice:AuthserviceService) { }



  ngOnInit() {
    this.forgatpasswordForm = this.fb.group({
      mail: ['', [Validators.required,Validators.email]],
    })
  }

  onForgat(){
    this.forgat.mail = this.forgatpasswordForm.get('mail').value;
    console.log(this.forgat);
    
    this.submitted=true;
    if(this.forgatpasswordForm.invalid){
    return false;
    }
    
    else{
     
        this.authservice.createLogin(this.forgat)
          .subscribe(data=>{
        console.log(data);
        
        if (data.status=="error") {
          this.msg=data.msg;
          this.datasaved=true;
    }

    else if (data.status=="success"){
     this.msg=data.msg;
     this.datasaved=true;
    }
    

    });

}

}

}