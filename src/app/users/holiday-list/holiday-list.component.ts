import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppserviceService} from '../../appservice.service';
import {AddHoliday_list} from '../../Models/AddHoliday_list';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ViewHoliday_List } from '../../Models/viewHoliday_List';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {
  addHolday_list: FormGroup;
  addHoliday_Model = new AddHoliday_list();
  viewHolidayList: ViewHoliday_List[];
 public BsDatepickerConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  local_data: any;
  locale = 'ja';
  massage = false;
  msg: any;

  constructor(private fb: FormBuilder, private http: AppserviceService, private localeService: BsLocaleService) {
    this.BsDatepickerConfig = Object.assign({},
        { showWeekNumbers: false},
        { dateInputFormat: 'YYYY年MM月DD日'});
  }

  ngOnInit() {
    this.localeService.use(this.locale);
    this.addHolday_list = this.fb.group({
      title: [''],
      date: ['']
    });
this.http.viewHoliday_list().subscribe(data => {
  console.log('view holiday list', data);
  this.viewHolidayList = data.Holiday;
});
  }
  submit() {
   const date = this.addHolday_list.get('date').value;
      const year = date.getFullYear();
      const month = date.getMonth()+1  //getMonth is zero based;
      const day = date.getDate();
      const formatted = year+"-"+month+"-"+day;
   alert(formatted);
    this.local_data = JSON.parse(localStorage.getItem('data'));
    alert(this.local_data.user_id);
    this.addHoliday_Model.user_id = this.local_data.user_id;
    this.addHoliday_Model.title = this.addHolday_list.get('title').value;
    this.addHoliday_Model.date = formatted;
    console.log(this.addHolday_list);
    this.http.addHoliday_list(this.addHoliday_Model).subscribe(data => {
      console.log(data);
      this.msg = data.msg;
      this.massage = true;
    });
  }
}
