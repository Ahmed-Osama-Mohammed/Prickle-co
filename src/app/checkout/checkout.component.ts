import { SelectedProduct } from './../Shared/modules/seletedProduct.module';
import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../services/add-to-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkout:SelectedProduct[]=[]
  total:number=0
  shipping:number|string="Free"
  key1:boolean=true;
  key2:boolean=true;
  promoCode:any={
    title:"frst50",
    available:true
  }
  promo:string=""

  constructor(private AddToCartService:AddToCartService) { 
    this.checkout=this.AddToCartService.products()
  }

  
  
  openKey2(){
    this.key2=false;
  }
  openKey1(){
    this.key1=false;
  }
  setTotal(){
    this.total = 0;
    for (let i = 0; i < this.checkout.length; i++) {
      this.total +=
      this.checkout[i].price * this.checkout[i].quantity;
  }
}
removeProduct(i: number) {
  this.checkout.splice(i, 1);
  this.setTotal();
  this.promoCode.available=true
  this.onKeydown()
}


onKeydown() {
  this.setTotal()
  if(this.promo==this.promoCode.title && this.promoCode.available===true) {
      this.total*=(50/100)
     return this.promoCode.available=false;
    }
    else if(this.promo==this.promoCode.title && this.promoCode.available==false){
      return this.promoCode.isUsed=true
    }
    else{
      return this.promoCode.inValid=true
    }

  }


ngOnInit(): void {
  this.setTotal()
}

}
