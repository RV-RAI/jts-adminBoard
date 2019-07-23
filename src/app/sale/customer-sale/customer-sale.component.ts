import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-customer-sale',
  templateUrl: './customer-sale.component.html',
  styleUrls: ['./customer-sale.component.css']
})
export class CustomerSaleComponent implements OnInit {
  localStorageData: any;
  constructor() { }

  ngOnInit() {
    this.localStorageData = JSON.parse(localStorage.getItem('data'));
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');

      });
    });
  }

}
