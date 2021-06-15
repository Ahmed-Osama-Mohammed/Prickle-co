import { AddToCartService } from './../services/add-to-cart.service';
import { UsersDataService } from './../services/users-data.service';
import { SharedserviceService } from './../services/sharedservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cacti',
  templateUrl: './cacti.component.html',
  styleUrls: ['./cacti.component.css',"../Shared/collection-style/style.css"]
})
export class CactiComponent implements OnInit {
  cactiCollection:any=[]
  isAdmin=[{isAdmin:false}]
  constructor(private SharedserviceService:SharedserviceService,private UsersDataService:UsersDataService ,private AddToCartService:AddToCartService) {
    this.cactiCollection = SharedserviceService.getCactiCollectioninfo();
    this.isAdmin = UsersDataService.sendCase();
    
  }

 selectedProduct(index:number){
   let seletedProduct=this.cactiCollection[index]
   this.AddToCartService.getProductInfo(seletedProduct);
  }

 
  
 edit(id:number){
  this.SharedserviceService.edit(id)
    
 }
 setValue(id:number){
  let x:any=document.getElementById(`${id}`)
  if(x.value==this.cactiCollection[id-1].price){
    this.cactiCollection[id-1].price=x.value
  }
  else if(x.value > this.cactiCollection[id-1].price){
    this.cactiCollection[id-1].priceBefore=undefined
    this.cactiCollection[id-1].price=x.value
  }
  else{

    this.cactiCollection[id-1].priceBefore=this.cactiCollection[id-1].price
    this.cactiCollection[id-1].price=x.value
  }
 this.SharedserviceService.setValue(id)

 }

  ngOnInit(): void {
  }

}
