import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { addcustmoreResponse } from './Models/addcustmoreResponse.model';
import { AddEmplyeelistResponse } from './Models/addEmplyeelistResponse';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }
  addCustomer(addcustmore): Observable<addcustmoreResponse> {
    return this.http.post<addcustmoreResponse>("https://web.jtsboard.com/web_service_angular/add_customer", addcustmore);
  }

  editCustomer(editcustomer): Observable<addcustmoreResponse> {
    return this.http.post<addcustmoreResponse>("https://web.jtsboard.com/web_service_angular/add_customer", editcustomer);
  }
  getCustomer(): Observable<any> {
    let localStorageData = JSON.parse(localStorage.getItem('data'));
    let params1 = new HttpParams().set('user_id', localStorageData.user_id);
    return this.http.get("https://web.jtsboard.com/web_service_angular/customer_list", { params: params1 });

  }



  viewCustomer(): Observable<any> {
    let localStorageData = JSON.parse(localStorage.getItem('data'));
    let user_id = localStorageData.user_id
    let customer_id = JSON.parse(localStorage.getItem('customerId'));

    console.log("userId of viewCustomer", user_id);
    console.log("custID of viewCustomer", customer_id);
    return this.http.get("https://web.jtsboard.com/web_service_angular/get_customer?user_id=" + user_id + "&customer_id=" + customer_id);
  }

  getcustomerAnalysis(): Observable<any> {
    let localStorageData = JSON.parse(localStorage.getItem('data'));
    let user_id = localStorageData.user_id
    let customer_id = JSON.parse(localStorage.getItem('customerId'));
    // console.log("userId of getcustomerAnalysis", user_id);
    // console.log("custID of getcustomerAnalysis", customer_id);
    return this.http.get("https://web.jtsboard.com/web_service_angular/get_customer_analysis_dates? user_id=" + user_id + "&customer_id=" + customer_id);
  }

  getNote(): Observable<any> {
    let localStorageData = JSON.parse(localStorage.getItem('data'));
    let user_id = localStorageData.user_id
    let customer_id = JSON.parse(localStorage.getItem('customerId'));
    let custanalStorageData = JSON.parse(localStorage.getItem('custanalData'));
    let id = custanalStorageData[0].id
    let date = custanalStorageData[0].date
    console.log("userId of getNote", user_id);
    console.log("custID of getNote", customer_id);
    console.log("id of getNote", id);
    console.log("date of getNote", date);
    return this.http.get("https://web.jtsboard.com/web_service_angular/get_note? user_id=" + user_id + "&customer_id=" + customer_id + "&id=" + id + "&date=" + date);
  }


  getshopList(): Observable<any> {
    let localStorageData = JSON.parse(localStorage.getItem('data'));
    let params1 = new HttpParams().set('user_id', localStorageData.user_id);
    return this.http.get("https://web.jtsboard.com/web_service_angular/get_shop_profile", { params: params1 });
  }
  getEmployee(): Observable<any> {
    let localStorageData = JSON.parse(localStorage.getItem('data'));

    let params1 = new HttpParams().set('user_id', localStorageData.user_id);
    return this.http.get("https://web.jtsboard.com/web_service_angular/employee_list", { params: params1 });
  }

  addEmployee(addEmployeeListModel): Observable<AddEmplyeelistResponse> {
    return this.http.post<AddEmplyeelistResponse>("https://web.jtsboard.com/web_service_angular/add_employee", addEmployeeListModel);
  }

  addHoliday_list(holiday): Observable<any> {
    return this.http.post<any>('https://web.jtsboard.com/web_service_angular/add_holiday', holiday);
  }
  viewHoliday_list(): Observable<any> {
    let localStorageData = JSON.parse(localStorage.getItem('data'));
    let userId = new HttpParams().set('user_id', localStorageData.user_id);
    return this.http.get<any>('https://web.jtsboard.com/web_service_angular/holiday_list?user_id=', { params: userId });
  }

}
