import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  order=0;
  username:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username=navParams.get('name');
  }
  

  ord(value:number):void{
    this.order+= value;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

 

  
  coffe=false;
  cappuccino=false;
  espresso=false;
  macchiato=false;

  price=5.0;
  netPrice=0.0;

  capp=2.50;
  espre=3.00;
  macc=2.00;


  purchase():void {
     this.calCost();
  }

    calCost():number{

      if(this.cappuccino && this.espresso && this.macchiato ){
        this.netPrice=(this.price + this.capp + this.espre + this.macc)*this.order;
      }
     else if(this.cappuccino && this.espresso ){
    
       this.netPrice=(this.price + this.capp + this.espre)*this.order;
     }
     else if(this.espresso && this.macchiato ){
    
       this.netPrice=(this.price + this.espre + this.macc)*this.order;
     }
     else if(this.cappuccino && this.macchiato){
    
       this.netPrice=(this.price + this.capp + this.macc)*this.order;
     }
     else if(this.cappuccino){

      this.netPrice=(this.price + this.capp)*this.order;
     }
     else if(this.espresso){

      this.netPrice=(this.price + this.espre)*this.order;
     }
     else if(this.macchiato){

      this.netPrice=(this.price + this.macc)*this.order;
     }
     return this.netPrice;
    }
  


}
