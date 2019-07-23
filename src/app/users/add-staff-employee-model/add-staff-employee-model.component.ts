import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppserviceService} from '../../appservice.service';
import {AddEmployeelist} from '../../Models/addEmployeelist';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
declare var $: any;
@Component({
  selector: 'app-add-staff-employee-model',
  templateUrl: './add-staff-employee-model.component.html',
  styleUrls: ['./add-staff-employee-model.component.css']
})
export class AddStaffEmployeeModelComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>
  addEmployeeList: FormGroup;
  addEmployeeListModel = new AddEmployeelist();
  submitted = false;
  user_id: any;
  constructor(private fb: FormBuilder, private http: AppserviceService, private localeService: BsLocaleService) { 
    this.localeService.use('ja');
    this.datePickerConfig = Object.assign({},
      {
        showWeekNumbers: false,
        dateInputFormat: 'YYYY年DD月MM日',
    })
  
  }

  ngOnInit() {
    $("#imageUpload").change(function() {
      readURL(this);
  });
    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          $('#imagePreview').css('background-image', 'url(' + reader.result + ')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
          console.log('fullLength', reader.result);
      }
      reader.readAsDataURL(input.files[0]);
  }

    let localStorageData = JSON.parse(localStorage.getItem('data'));
    this.user_id = localStorageData .user_id;
    // this.emp_code = localStorage.setItem('this.employee_code.emp_code');
    this.addEmployeeList = this.fb.group({
      image: [''],
      name: [''],
      dob: [''],
      phone: [''],
      joining_date: [''],
      designation: [''],
      salary: [''],
      address: [''],
      email: [''],
      role_id: [''],
      service_id: ['' ],
      id:  ['']
    });
  }
  onSubmit() {

    this.addEmployeeListModel.user_id =  this.user_id;
    this.addEmployeeListModel.name = this.addEmployeeList.get('name').value;
    this.addEmployeeListModel.dob = this.addEmployeeList.get('dob').value;
    this.addEmployeeListModel.phone = this.addEmployeeList.get('phone').value;
    this.addEmployeeListModel.joining_date = this.addEmployeeList.get('joining_date').value;
    this.addEmployeeListModel.designation = this.addEmployeeList.get('designation').value;
    this.addEmployeeListModel.salary = this.addEmployeeList.get('salary').value;
    this.addEmployeeListModel.address = this.addEmployeeList.get('address').value;
    this.addEmployeeListModel.image = this.addEmployeeList.get('image').value;
    this.addEmployeeListModel.email = this.addEmployeeList.get('email').value;
    this.addEmployeeListModel.role_id = this.addEmployeeList.get('role_id').value;
    this.addEmployeeListModel.service_id = this.addEmployeeList.get('service_id').value;
    this.addEmployeeListModel.id = this.addEmployeeList.get('id').value;

    // if (this.addEmployeeList.invalid) {
    //   return false;
    //
    console.log(this.addEmployeeListModel);
    // } else {
      this.http.addEmployee(this.addEmployeeListModel).subscribe(data => {
        console.log("this is employee add data response", data);
      });
    // }
   
  }
  mask: any[] =
      // ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}
