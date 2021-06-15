 import { Injectable } from '@angular/core';
import { Brand } from '../Shared/modules/brand.module';
import { Collenction, ProductCollenction } from '../Shared/modules/collection.module';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  brand:Brand ={
    name :  'Prickles & Co',
    establishedYear : 2021,
    address : 'Address: 500 Terry Francois',
    street: "Street San Francisco, CA 94158",
    phone : '123-45-6789',
    email:  'info@mysite.com',
    openTime: {
      day1:"Mon - Fri", time1:"7am - 10pm" ,
      day2:"​​Saturday", time2:"8am - 10pm", 
      day3:"Sunday", time3:"8am - 11pm" 
    }
  }
  
  collections: Collenction[] = [
    { name: 'cacti'},
    { name: 'plants'},
    { name: 'succulents'}
  ];

  cactiCollection :ProductCollenction[]=[
    { name:"cacti1" , priceBefore:15.00 , price:13.50 ,bestSeller:true ,id:1,img:"../../assets/Images/cacti1.jpg"},
    { name:"cacti2" , price:20,id:2,img:"../../assets/Images/cacti2.jpg"},
    { name:"cacti3" , price:15,id:3,img:"../../assets/Images/cacti3.jpg"},
    { name:"cacti4" , price:20,id:4,img:"../../assets/Images/cacti4.jpg"},
    { name:"cacti5" , price:23 , newArrival:true,id:5 ,img:"../../assets/Images/cacti5.jpg"},
    { name:"cacti6" , price:13,id:6,img:"../../assets/Images/cacti6.jpg"}
  ];

  plantCollection :ProductCollenction[]=[
    { name:"plant1" , priceBefore:25.00 , price:18.50 ,bestSeller:true, id:7,img:"../../assets/Images/plant1.jpg"},
    { name:"plant2" , price:23 ,id:8,img:"../../assets/Images/plant2.jpg"},
    { name:"plant3" , price:18,id:9,img:"../../assets/Images/plant3.jpg"},
    { name:"plant4" , price:25 ,id:10,img:"../../assets/Images/plant4.jpg"},
    { name:"plant5" , price:20 , newArrival:true,id:11 ,img:"../../assets/Images/plant5.jpg"},
    { name:"plant6" , price:18 ,id:12,img:"../../assets/Images/plant6.jpg"}
  ];

  succulentsCollection :ProductCollenction[]=[
    { name:"succulents1" , priceBefore:25.00 , price:18.50 ,bestSeller:true , id:13,img:"../../assets/Images/succulent1.jpg"},
    { name:"succulents2" , price:23 ,id:14,img:"../../assets/Images/succulent2.jpg"},
    { name:"succulents3" , price:18 ,id:15,img:"../../assets/Images/succulent3.jpg"},
    { name:"succulents4" , price:25 ,id:16,img:"../../assets/Images/succulent4.jpg"},
    { name:"succulents5" , price:20 , newArrival:true ,id:17,img:"../../assets/Images/succulent5.jpg"},
    { name:"succulents6" , price:18 ,id:18,img:"../../assets/Images/succulent6.jpg"}
  ];

  allCollections:any=[]
  
  edit(id:number){
    let x:any=document.getElementById(`edit-sec${id}`)
    let y:any=document.getElementById(`editor${id}`)
    x.style.display="none"
    y.style.display="inline-block"
  }

  setValue(id:number){  
    
    let a:any=document.getElementById(`edit-sec${id}`)
    let b:any=document.getElementById(`editor${id}`)
    b.style.display="none"
    a.style.display="inline-block"
  
   }
 

  getBrandInfo(){
    return this.brand;
  }
  getCollectioninfo(){
    return this.collections;
  }
  getCactiCollectioninfo(){
    return this.cactiCollection;
  }
  getPlantCollectioninfo(){
    return this.plantCollection;
  }
  getSucculentsCollectioninfo(){
    return this.succulentsCollection;
  }
  getAllCollectioninfo(){
    this.allCollections=[...this.cactiCollection ,...this.plantCollection, ...this.succulentsCollection]
    return this.allCollections;
    
  }
  
  constructor() { 
  }
  
}
