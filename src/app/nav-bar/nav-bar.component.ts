import { AddToCartService } from './../services/add-to-cart.service';
import { Component, OnInit  } from '@angular/core';
import {SharedserviceService} from '../services/sharedservice.service'
import { Brand } from '../Shared/modules/brand.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  brand:Brand;
  cart:number;
  
  
  
  constructor(private AddToCartService:AddToCartService , SharedserviceService : SharedserviceService) {
    this.brand = SharedserviceService.getBrandInfo()
    this.cart=this.AddToCartService.getCart()

  }
  
  openCart(){
    this.cart= this.AddToCartService.getCart()
    this.AddToCartService.openCart()

  }
  changeText(){
    let x:any = document.getElementById("call");
    if(x.innerHTML ==="Call Us Now! 123-456-7890"){
      x.innerHTML="We Deliver to Your Doorstep"
      setInterval(this.changeText,4000);
  
    }
    else{
      x.innerHTML="Call Us Now! 123-456-7890"
      setInterval(this.changeText,4000);
    }
  
  }
  
  openLogin(){
    let y:any=document.getElementById("login");
    document.getElementsByTagName("body")[0].style.overflowY="hidden";
    y.style.display="block";
  }
  
  
  ngOnInit(): void {
  this.changeText()

}

}
