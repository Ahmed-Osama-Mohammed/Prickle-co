import { AddToCartService } from './../services/add-to-cart.service';
import { UsersDataService } from './../services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../services/sharedservice.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css',"../Shared/collection-style/style.css"]
})
export class AllProductsComponent implements OnInit {

  allCollections:any=[]
  isAdmin=[{isAdmin:false}]
  constructor(private AddToCartService:AddToCartService,private SharedserviceService:SharedserviceService,private UsersDataService:UsersDataService) {
    this. allCollections = SharedserviceService.getAllCollectioninfo();
    this.isAdmin = UsersDataService.sendCase();
    
  }
  selectedProduct(index:number){
    let seletedProduct=this.allCollections[index]
    this.AddToCartService.getProductInfo(seletedProduct);
   }
  
 edit(id:number){
  this.SharedserviceService.edit(id+(this. allCollections[0].id))
    
 }
 setValue(id:number){
  let x:any=document.getElementById(`${id+(this. allCollections[0].id)}`)
  if(x.value==this. allCollections[id].price){
    this. allCollections[id].price=x.value
  }
  else if(x.value > this. allCollections[id ].price){
    this. allCollections[id].priceBefore=undefined
    this. allCollections[id].price=x.value
  }
  else{

    this. allCollections[id].priceBefore=this. allCollections[id ].price
    this. allCollections[id].price=x.value
  }
 this.SharedserviceService.setValue(id+(this. allCollections[0].id) )

 }
  ngOnInit(): void {
  }

}
