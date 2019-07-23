import { Component, OnInit, } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getcustmoredetailResponse } from '../Models/getcustmoredetailResponse.model';
import { addcustmoreDetail } from '../Models/addcustmoreDetail';

declare var $: any;
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  addcustmorlistForm: FormGroup;
  addcustmore = new addcustmoreDetail();
  customer: getcustmoredetailResponse[];
  datasaved = false;
  submitted = false;
  logoshow: any;
  msg: any;
  localStorageData: any;


  constructor(private fb: FormBuilder, private router: Router, private appservice: AppserviceService) { }

  ngOnInit() {
    this.logoshow = true;
    this.localStorageData = JSON.parse(localStorage.getItem('data'));
    this.appservice.getCustomer()
      .subscribe(
        data => {
          this.customer = data.Customer
          console.log('i am get customer response', this.customer);

        }
      );
    this.addcustmorlistForm = this.fb.group({
      Method_type: ['angular'],
      user_id: [''],
      last_name: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      kana_last_name: ['', [Validators.required]],
      kana_first_name: ['', [Validators.required]],
      service_id: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      zip_code: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      age: ['', [Validators.required]],
      job: ['', [Validators.required]],
      subscription_of_news: ['', [Validators.required]],
      know_about_company: ['', [Validators.required]],
      how_did_you_come: ['', [Validators.required]],
    });
    $(document).ready(function () {
      $('#example').DataTable();
    });
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  });
  }

  onAddCustmorList() {
    this.addcustmore.Method_type = this.addcustmorlistForm.get('Method_type').value;
    this.addcustmore.user_id = this.localStorageData.user_id;
    this.addcustmore.last_name = this.addcustmorlistForm.get('last_name').value;
    this.addcustmore.first_name = this.addcustmorlistForm.get('first_name').value;
    this.addcustmore.kana_last_name = this.addcustmorlistForm.get('kana_last_name').value;
    this.addcustmore.kana_first_name = this.addcustmorlistForm.get('kana_first_name').value;
    this.addcustmore.service_id = this.addcustmorlistForm.get('service_id').value;
    this.addcustmore.email = this.addcustmorlistForm.get('email').value;
    this.addcustmore.tel = this.addcustmorlistForm.get('tel').value;
    this.addcustmore.city = this.addcustmorlistForm.get('city').value;
    this.addcustmore.address1 = this.addcustmorlistForm.get('address1').value;
    this.addcustmore.address2 = this.addcustmorlistForm.get('address2').value;
    this.addcustmore.zip_code = this.addcustmorlistForm.get('zip_code').value;
    this.addcustmore.gender = this.addcustmorlistForm.get('gender').value;
    this.addcustmore.dob = this.addcustmorlistForm.get('dob').value;
    this.addcustmore.age = this.addcustmorlistForm.get('age').value;
    this.addcustmore.job = this.addcustmorlistForm.get('job').value;
    this.addcustmore.subscription_of_news = this.addcustmorlistForm.get('subscription_of_news').value;
    this.addcustmore.know_about_company = this.addcustmorlistForm.get('know_about_company').value;
    this.addcustmore.how_did_you_come = this.addcustmorlistForm.get('how_did_you_come').value;
    this.submitted = true;
    if (this.addcustmorlistForm.invalid) {
      return false;

    }

    else {
      console.log(this.addcustmore);
      this.appservice.addCustomer(this.addcustmore)
        .subscribe(data => {
          console.log('i am add customer response', data);
          this.appservice.getCustomer()
            .subscribe(
              data => {
                this.customer = data.Customer;
                console.log('i am get customer response', this.customer);
              }
            );
        });

    }

  }

  showId(custid) {
    // alert(custid);
    localStorage.setItem('customerId', JSON.stringify(custid));
  }



  mask: any[] =
    // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


}
