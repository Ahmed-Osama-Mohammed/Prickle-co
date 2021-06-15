import { Injectable } from '@angular/core';
import {SelectedProduct} from '../Shared/modules/seletedProduct.module'
@Injectable({
  providedIn: 'root'
})
export  class AddToCartService {

  cart:number=0
  key:boolean=false

  selectedProduct:SelectedProduct={
    name:"",
    price:0,
    img:"",
    id:0,
    quantity:0
  }
  
  addProduct:SelectedProduct[]=[]
  
  checkout:SelectedProduct[]=[]
  

  setCheckout(checkout:SelectedProduct[]){
    this.checkout=checkout
  }

  getCheckout(){
    return this.checkout
  }



  constructor() { }

  addedProduct(product:SelectedProduct[]){
    this.addProduct=product
  }
  products(){
    return this.addProduct
  }
  
   addItemsToCart(quantity:number){
     this.selectedProduct.quantity=quantity
    return this.cart=+quantity

  }
   getCart(){
    return this.cart
  }
  openCart() {
  let x:any=document.getElementById("side-bar")
  let y:any=document.getElementById("bg")
  y.style.display="block"
  x.style.right =0
 }
    
  getProductInfo(product:SelectedProduct){
  this.selectedProduct=product
  this.openAddToCart(this.selectedProduct.img,this.selectedProduct.name,this.selectedProduct.price,this.selectedProduct.id)
  }
  
  openAddToCart(img:string,title:string,price:number,id:number){
    let add:any=document.getElementById("add")
    add.style.display="block"
    let titleEle:any=document.getElementById("title")
    let priceEle:any=document.getElementById("price")
    let serialEle:any=document.getElementById("serialNum")
    let imgEle:any=document.getElementById("img")
    titleEle.innerText=title;
    if(id>9){
      serialEle.innerText="SKU:00"+id;
    }
    if(id<9){
      serialEle.innerText="SKU:000"+id;
    }
    imgEle.innerHTML='<img src="'+img+'" style="width: 100%; margin-top: 6%;">'
    if(price % 1 === 0){
      priceEle.innerHTML="$"+price+".00";
    }
    else {
      priceEle.innerHTML="$"+price+"0";
    }
  

  }
  
}
