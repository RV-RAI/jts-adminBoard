import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-common-component',
  templateUrl: './common-component.component.html',
  styleUrls: ['./common-component.component.css']
})
export class CommonComponentComponent implements OnInit {
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
