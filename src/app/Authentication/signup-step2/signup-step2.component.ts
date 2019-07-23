import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup, AbstractControl} from '@angular/forms';
import { signup2Detail } from '../../Models/signup2Detail';
import { AuthserviceService } from '../../authservice.service';

@Component({
  selector: 'app-signup-step2',
  templateUrl: './signup-step2.component.html',
  styleUrls: ['./signup-step2.component.css']
})
export class SignupStep2Component implements OnInit {
  
  
  constructor(private fb:FormBuilder,private authservice:AuthserviceService, private route: ActivatedRoute, private router:Router) { }
  signupForm:FormGroup;
  cform = new signup2Detail();
  datasaved=false;
  submitted = false;
  user_id: string;
  msg:string;
  ngOnInit() {
    
  this.route.queryParamMap.subscribe(queryParams => {
    this.user_id = queryParams.get("user_id")
    
    
  })

  this.signupForm = this.fb.group({
    name: ['', [Validators.required]],
    zip_code: ['', [Validators.required]],
    prefecture: ['', [Validators.required]],
    city: ['', [Validators.required]],
    address1: ['', [Validators.required]],
    address2: ['', [Validators.required]],
    tel: ['', [Validators.required]],
    website: ['', [Validators.required]],
    sales_code: [''],
   
    checkbox1: ['', [Validators.required]],
    checkbox2: ['', [Validators.required]],

  })

  }

onSignup2(){
  this.cform.name= this.signupForm.get('name').value;
  this.cform.zip_code= this.signupForm.get('zip_code').value;
  this.cform.prefecture= this.signupForm.get('prefecture').value;
  this.cform.city= this.signupForm.get('city').value;
  this.cform.address1= this.signupForm.get('address1').value;
  this.cform.address2= this.signupForm.get('address2').value;
  this.cform.tel= this.signupForm.get('tel').value;
  this.cform.website= this.signupForm.get('website').value;
  this.cform.sales_code= this.signupForm.get('sales_code').value;
  this.cform.user_id = this.user_id;
  


  this.submitted=true;
if(this.signupForm.invalid){
return false;

}

else{
  console.log(this.cform);
  
this.authservice.createSignup2(this.cform)
    .subscribe(data=>{
  console.log(data);
  this.router.navigate(['login']);
    })
  
  
     }
  }

  mask: any[] =
  // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  
}
