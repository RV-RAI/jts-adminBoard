import { Component, OnInit } from '@angular/core';

import { Employee_listResponse } from '../../Models/employee_listResponse';
import { AppserviceService } from '../../appservice.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  emyployee: Employee_listResponse[];
  parentMessage: any;
  emp_code: any;
  // user_id = "586"
  // method_type = "angular"
  constructor(private appservice: AppserviceService) { }
  fullImagePath: any;
  ngOnInit() {
    this.appservice.getEmployee()
      .subscribe(
        data => {
          console.log(data.Employee);
          this.emyployee = data.Employee;
          console.log("employe data response", this.emyployee);
          this.fullImagePath = this.emyployee[0].image;
        });
  }
  viewEmp(p) {
    alert(p);
  }
  eddEmp(p) {
    alert(p);
    this.parentMessage = p;
  }
}
