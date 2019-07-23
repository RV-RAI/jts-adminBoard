import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-customer-note-sale',
  templateUrl: './customer-note-sale.component.html',
  styleUrls: ['./customer-note-sale.component.css']
})
export class CustomerNoteSaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');

        });
      });
  }

}
