import { AddToCartService } from './../services/add-to-cart.service';
import { UsersDataService } from './../services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from './../services/sharedservice.service';


@Component({
  selector: 'app-succulents',
  templateUrl: './succulents.component.html',
  styleUrls: ['./succulents.component.css',"../Shared/collection-style/style.css"]
})
export class SucculentsComponent implements OnInit {

   succulentsCollection:any=[]
  isAdmin=[{isAdmin:false}]
  constructor(private AddToCartService:AddToCartService,private SharedserviceService:SharedserviceService,private UsersDataService:UsersDataService) {
    this. succulentsCollection = SharedserviceService.getSucculentsCollectioninfo();
    this.isAdmin = UsersDataService.sendCase();
    
  }
  selectedProduct(index:number){
    let seletedProduct=this.succulentsCollection[index]
    this.AddToCartService.getProductInfo(seletedProduct);
   }
  
 edit(id:number){
  this.SharedserviceService.edit(id+(this. succulentsCollection[0].id))
    
 }
 setValue(id:number){
  let x:any=document.getElementById(`${id+(this. succulentsCollection[0].id)}`)
  if(x.value==this. succulentsCollection[id].price){
    this. succulentsCollection[id].price=x.value
  }
  else if(x.value > this. succulentsCollection[id ].price){
    this. succulentsCollection[id].priceBefore=undefined
    this. succulentsCollection[id].price=x.value
  }
  else{

    this. succulentsCollection[id].priceBefore=this. succulentsCollection[id ].price
    this. succulentsCollection[id].price=x.value
  }
 this.SharedserviceService.setValue(id+(this. succulentsCollection[0].id) )

 }


  ngOnInit(): void {
  }

}
