import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { DesComponent } from './des/des.component';
import { SignupStep1SuccessComponent } from './Authentication/signup-step1-success/signup-step1-success.component';
import { UsersComponent } from './users/users/users.component';
import { MyShopComponent } from './users/my-shop/my-shop.component';
import { EmployeeListComponent } from './users/employee-list/employee-list.component';
import { TicketListComponent } from './users/ticket-list/ticket-list.component';
import { ProductListComponent } from './users/product-list/product-list.component';
import { PaymentInfoComponent } from './users/payment-info/payment-info.component';
import { SignupStep2Component } from './Authentication/signup-step2/signup-step2.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from './auth.guard';
import { HolidayListComponent } from './users/holiday-list/holiday-list.component';
import { CustomerAnalysisComponent } from './customerAnalysis/customer-analysis/customer-analysis.component';
import { CommonComponentComponent } from './customerAnalysis/common-component/common-component.component';
import { CustomerNoteComponent } from './customerAnalysis/customer-note/customer-note.component';
import { CustomerNoteSaleComponent } from './customerAnalysis/customer-note-sale/customer-note-sale.component';
import { CustomerSaleComponent } from './sale/customer-sale/customer-sale.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DesBoardContentComponent } from './des-board-content/des-board-content.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signup-step2', component: SignupStep2Component },
  { path: 'signup-step1-success', component: SignupStep1SuccessComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DesComponent},
{ path: 'customer-list', component: CustomerListComponent },
{ path: 'customer-sale', component: CustomerSaleComponent },

  {
    path: 'users', component: UsersComponent
    , children: [
      { path: '', component: MyShopComponent },
      { path: 'my-shop', canActivate: [AuthGuard], component: MyShopComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'ticket-list', component: TicketListComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'payment-info', component: PaymentInfoComponent },
      { path: 'holiday_list', component: HolidayListComponent }
    ]
  },

  {
    path: 'get_customer_analysis_dates', component: CommonComponentComponent
    , children: [
      { path: '', component: CustomerAnalysisComponent },
      { path: 'customer-note', component: CustomerNoteComponent },
      { path: 'customer-note-sale', component: CustomerNoteSaleComponent }


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
