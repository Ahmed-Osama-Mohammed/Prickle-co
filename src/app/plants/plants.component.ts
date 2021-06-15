import { AddToCartService } from './../services/add-to-cart.service';
import { UsersDataService } from './../services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from './../services/sharedservice.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css',"../Shared/collection-style/style.css"]
})
export class PlantsComponent implements OnInit {

   plantCollection:any=[]
  isAdmin=[{isAdmin:false}]
  constructor(private AddToCartService:AddToCartService,private SharedserviceService:SharedserviceService,private UsersDataService:UsersDataService) {
    this.plantCollection = SharedserviceService.getPlantCollectioninfo();
    this.isAdmin = UsersDataService.sendCase();
    
  }

  selectedProduct(index:number){
    let seletedProduct=this.plantCollection[index]
    this.AddToCartService.getProductInfo(seletedProduct);
   }

  
 edit(id:number){
  this.SharedserviceService.edit(id+(this.plantCollection[0].id))
    
 }
 setValue(id:number){
  let x:any=document.getElementById(`${id+(this.plantCollection[0].id)}`)
  if(x.value==this.plantCollection[id].price){
    this.plantCollection[id].price=x.value
  }
  else if(x.value > this.plantCollection[id ].price){
    this.plantCollection[id].priceBefore=undefined
    this.plantCollection[id].price=x.value
  }
  else{

    this.plantCollection[id].priceBefore=this.plantCollection[id ].price
    this.plantCollection[id].price=x.value
  }
 this.SharedserviceService.setValue(id+(this.plantCollection[0].id) )

 }

  ngOnInit(): void {
  }

}
