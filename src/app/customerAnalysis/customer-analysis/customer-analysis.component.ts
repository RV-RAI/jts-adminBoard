import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../appservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { editcustmoreDetail } from '../../Models/editcustmoreDetail.1';
import { viewcustmoredetailResponse } from '../../Models/viewcustmoredetailResponse.model';
import { getcustanalysis } from '../../Models/getcustanalysis.model';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-customer-analysis',
  templateUrl: './customer-analysis.component.html',
  styleUrls: ['./customer-analysis.component.css']
})
export class CustomerAnalysisComponent implements OnInit {
  localStorageData: any;
  customerID: any;
  editcustomerForm: FormGroup;
  editcustomer = new editcustmoreDetail();
  viewcustomer: viewcustmoredetailResponse[];
  custanal: getcustanalysis[];
  custanalStorageData: any;
  datasaved = false;
  submitted = false;
  msg: any;


  constructor(private fb: FormBuilder, private appservice: AppserviceService, router: Router) { }

  ngOnInit() {
    this.localStorageData = JSON.parse(localStorage.getItem('data'));

    this.appservice.getcustomerAnalysis()
      .subscribe(
        data => {
          this.custanal = data
          localStorage.setItem('custanalData', JSON.stringify(this.custanal));
          this.custanalStorageData = JSON.parse(localStorage.getItem('custanalData'));
          console.log("custanalStorageData", this.custanalStorageData[0]);
        }
      );
    this.editcustomerForm = this.fb.group({
      user_id: [''],
      customer_id: [''],
      // salon_id: [''],
      last_name: [''],
      first_name: [''],
      kana_last_name: [''],
      kana_first_name: [''],
      service_id: [''],
      email: [''],
      tel: [''],
      city: [''],
      address1: [''],
      address2: [''],
      zip_code: [''],
      gender: [''],
      dob: [''],
      age: [''],
      job: [''],
      subscription_of_news: [''],
      know_about_company: [''],
      how_did_you_come: [''],
    })

      // $(document).ready(function () {
      //   $('#sidebarCollapse').on('click', function () {
      //     $('#sidebar').toggleClass('active');
      //     $(this).toggleClass('active');

      //   });
      // });



    $('#editbtn').on('click', function () {
      $('#editbttn').css('display', 'block');
      $('.enable-edit').prop('readonly', false);
      $('.enable-edit').prop('disabled', false);
    });


  }

  viewcust() {
    this.appservice.viewCustomer()
      .subscribe(
        data => {
          this.viewcustomer = data.Customer;
          console.log(" i am getting the viewcustomerData", this.viewcustomer);
        });
  }

  oneditCustomer() {


    this.editcustomer.user_id = this.localStorageData.user_id;
    this.editcustomer.customer_id = this.customerID
    // this.addcustmore.salon_id = this.editcustomerForm.get('salon_id').value;
    this.editcustomer.last_name = this.editcustomerForm.get('last_name').value;
    this.editcustomer.first_name = this.editcustomerForm.get('first_name').value;
    this.editcustomer.kana_last_name = this.editcustomerForm.get('kana_last_name').value;
    this.editcustomer.kana_first_name = this.editcustomerForm.get('kana_first_name').value;
    this.editcustomer.service_id = this.editcustomerForm.get('service_id').value;
    this.editcustomer.email = this.editcustomerForm.get('email').value;
    this.editcustomer.tel = this.editcustomerForm.get('tel').value;
    this.editcustomer.city = this.editcustomerForm.get('city').value;
    this.editcustomer.address1 = this.editcustomerForm.get('address1').value;
    this.editcustomer.address2 = this.editcustomerForm.get('address2').value;
    this.editcustomer.zip_code = this.editcustomerForm.get('zip_code').value;
    this.editcustomer.gender = this.editcustomerForm.get('gender').value;
    this.editcustomer.dob = this.editcustomerForm.get('dob').value;
    this.editcustomer.age = this.editcustomerForm.get('age').value;
    this.editcustomer.job = this.editcustomerForm.get('job').value;
    this.editcustomer.subscription_of_news = this.editcustomerForm.get('subscription_of_news').value;
    this.editcustomer.know_about_company = this.editcustomerForm.get('know_about_company').value;
    this.editcustomer.how_did_you_come = this.editcustomerForm.get('how_did_you_come').value;

    this.submitted = true;
    this.appservice.editCustomer(this.editcustomer)
      .subscribe(
        data => {
          console.log("i am getting the editcustomer data ", data);
        });
  }
  getnote() {
    this.appservice.getNote()
      .subscribe(
        data => {
          console.log("i am getting getnote data", data);

        });
  }

}
