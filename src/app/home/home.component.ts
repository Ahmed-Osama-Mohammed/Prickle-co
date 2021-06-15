import { Component, OnInit, Input } from '@angular/core';
import { Collenction } from '../Shared/modules/collection.module';
import { SharedserviceService } from './../services/sharedservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  brand: any;
  collections: Collenction[] = [
  ];
  routerLinks=["/cacti","/plants","/succulents"]
  // offers :string[]=["buy online now & get 10% off !","buy one have one 1 = 2 ","there are a special offer in weekend!"];
  
  // putOffers(){
  //   let  x:any = document.getElementById("offer");
  //    for(let i=0;i<this.offers.length;i++){
  //            if (x.innerHTML === this.offers[i] && i+1!=this.offers.length) {
    //                x.innerHTML = this.offers[i+1];
  //                    setInterval(this.putOffers,2000);
  //                break
  //            }
  //            else if(i+1===this.offers.length){
  //                        x.innerHTML = this.offers[0];
  //                            setInterval(this.putOffers,2000);
  //   }
  //    }}

  
  constructor(SharedserviceService: SharedserviceService) {
    this.brand = SharedserviceService.getBrandInfo();
    this.collections= SharedserviceService.getCollectioninfo();
  }
  putOffers(){
    let x:any = document.getElementById("offer");
    if(x.innerHTML == "buy online now &amp; get 10% off !"){
      x.innerHTML="buy one have one for free 1 = 2 ";
      setInterval(this.putOffers,4000);
    }
    else  if(x.innerHTML =="buy one have one for free 1 = 2 "){
      x.innerHTML="check the special offer in weekend!";
      setInterval(this.putOffers,4000);
    }
    else{
      x.innerHTML="buy online now &amp; get 10% off !";
      setInterval(this.putOffers,4000);
    }
  
  }
  
  ngOnInit(): void {
    this.putOffers();
  }
}
