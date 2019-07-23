import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit {
  localStorageData: any;
 
  constructor(private router: Router) { }

  ngOnInit() {
  
    this.localStorageData = JSON.parse(localStorage.getItem('data'));
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  });
  }
  onLogout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/']);
  }

}
