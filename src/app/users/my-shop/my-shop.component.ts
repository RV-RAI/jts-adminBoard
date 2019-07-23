import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/appservice.service';
import { getshopProfile } from '../../Models/getshopProfile';
declare var $: any;
@Component({
  selector: 'app-my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.css']
})
export class MyShopComponent implements OnInit {

  constructor(private appservice: AppserviceService) { }
  user = new getshopProfile();
  ngOnInit() {

    this.appservice.getshopList()
      .subscribe(
        data => {
          // console.log(data.User);
          this.user = data.User
          // console.log(this.user.email);

        }
      );

  }

}
