import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';

import { AuthserviceService } from './authservice.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DesComponent } from './des/des.component';
import { SignupStep1SuccessComponent } from './Authentication/signup-step1-success/signup-step1-success.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { UsersComponent } from './users/users/users.component';
import { MyShopComponent } from './users/my-shop/my-shop.component';
import { EmployeeListComponent } from './users/employee-list/employee-list.component';
import { TicketListComponent } from './users/ticket-list/ticket-list.component';
import { ProductListComponent } from './users/product-list/product-list.component';
import { PaymentInfoComponent } from './users/payment-info/payment-info.component';
import { SignupStep2Component } from './Authentication/signup-step2/signup-step2.component';
import { LoginModalComponent } from './Authentication/login-modal/login-modal.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MyShopTabsComponent } from './users/my-shop-tabs/my-shop-tabs.component';
import { PopMobelsMyshopComponent } from './users/pop-mobels-myshop/pop-mobels-myshop.component';
import { AddStaffEmployeeModelComponent } from './users/add-staff-employee-model/add-staff-employee-model.component';
import { HolidayListComponent } from './users/holiday-list/holiday-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { jaLocale } from 'ngx-bootstrap/locale';
import { CustomerAnalysisComponent } from './customerAnalysis/customer-analysis/customer-analysis.component';
import { CommonComponentComponent } from './customerAnalysis/common-component/common-component.component';
import { CustomerNoteComponent } from './customerAnalysis/customer-note/customer-note.component';
import { CustomerNoteSaleComponent } from './customerAnalysis/customer-note-sale/customer-note-sale.component';
import { CustomerSaleComponent } from './sale/customer-sale/customer-sale.component';
import { FootarComponent } from './footar/footar.component';

import { AttendanceComponent } from './attendance/attendance.component';

import { DesBoardContentComponent } from './des-board-content/des-board-content.component';

defineLocale('ja', jaLocale);



@NgModule({
  declarations: [
    AppComponent,
    DesComponent,
    LoginComponent,
    SignUpComponent,
    SignupStep1SuccessComponent,
    UsersComponent,
    MyShopComponent,
    EmployeeListComponent,
    TicketListComponent,
    ProductListComponent,
    PaymentInfoComponent,
    SignupStep2Component,
    LoginModalComponent,
    CustomerListComponent,
    MyShopTabsComponent,
    PopMobelsMyshopComponent,
    AddStaffEmployeeModelComponent,
    HolidayListComponent,
    CustomerAnalysisComponent,
    CommonComponentComponent,
    CustomerNoteComponent,
    CustomerNoteSaleComponent,
    CustomerSaleComponent,
    FootarComponent,

    AttendanceComponent,

    DesBoardContentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextMaskModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
