import { Component, OnInit } from '@angular/core';
import {Employee_listResponse} from '../../Models/employee_listResponse';
import {AppserviceService} from '../../appservice.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

declare var $:any;
@Component({
  selector: 'app-pop-mobels-myshop',
  templateUrl: './pop-mobels-myshop.component.html',
  styleUrls: ['./pop-mobels-myshop.component.css']
})
export class PopMobelsMyshopComponent implements OnInit {
  addEmployeelist: FormGroup;
  submitted = false;
  datasaved = false;
  msg: any;
  localStorageData: any;
  employ_list_show: Employee_listResponse[];

  constructor(private fb: FormBuilder, private  appserviceService: AppserviceService) { }

  ngOnInit() {
      ////////////////// start employee list show in popup box //////////////////////////////////////////////////////////
      this.appserviceService.getEmployee().subscribe(data => {
          console.log(data);
          this.employ_list_show = data.Employee;
      });
      ////////////////// end employee list show in popup box //////////////////////////////////////////////////////////

      ///////////////////////// start employee add staff//////////////////////////////////////////////
      this.addEmployeelist = this.fb.group({
          user_id: ['', [Validators.required]],
          name: ['', [Validators.required]],
          dob: ['', [Validators.required]],
          phone: ['', [Validators.required]],
          joining_date: ['', [Validators.required]],
          designation: ['', [Validators.required]],
          salary: ['', [Validators.required]],
          address: ['', [Validators.required]],
          image: ['', [Validators.required]],
          email: ['', [Validators.required]],
          role_id: ['', [Validators.required]],
          service_id: ['', [Validators.required]],
          id: ['', [Validators.required]]
      });
      ///////////////////////// end employee add staff//////////////////////////////////////////////
      function readURL(input) {
        
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+reader.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            console.log('image uploade is ',reader.result);
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
        alert('hello ');
    });
    }


}
