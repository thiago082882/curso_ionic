import { CouponsService } from './../../services/coupons.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
  public couponsActive : boolean;
  public coupons : Coupon[];
  constructor(
    private couponsService:CouponsService,
    private navParams : NavParams,
    private navController : NavController
  ) { 
    this.coupons = [];
    this.couponsActive = false ; 
  }

  ngOnInit() {
    this.couponsService.getCoupons().then((coupons:
       Coupon[])=>{
         this.coupons = coupons
         console.log(this.coupons)
    });
  }

  changeActive(coupon: Coupon){
  coupon.active = !coupon.active;
  this.couponsActive = this.coupons.some(c=> c.active);
  }

  goToCard(){
  this.navParams.data["coupons"]  =this.coupons.filter(
    c=> c.active);
    this.navController.navigateForward('card-coupon');
  }

}
