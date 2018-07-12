import { OrderPage } from './../order/order';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  username:string;

  nextpage(name){
   
    this.username=name;
    this.navCtrl.push(OrderPage,{data:this.username})

  }
  pushpage(){
 this.nextpage(name)
   
  }

  
}
