import { SelectedProduct } from './../Shared/modules/seletedProduct.module';
import { AddToCartService } from './../services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  selectedProducts: SelectedProduct[] = [];
  total: number = 0;

  quantity: number = 1;

  totalQuantity:number = 0;

  addedProduct: SelectedProduct[] = [];
  constructor(private AddToCartService: AddToCartService) {}

  addToCart() {
    this.addedProduct.push(this.AddToCartService.selectedProduct);
    this.AddToCartService.addedProduct(this.addedProduct);
    this.selectedProducts = this.AddToCartService.products();
    for (let i = 0; i < this.selectedProducts.length; i++) {
      for (let j = i + 1; j < this.selectedProducts.length; j++) {
        if (this.selectedProducts[i].name == this.selectedProducts[j].name) {
          this.selectedProducts.splice(j, 1);
        }
      }
    }
    this.closed()
  }

  setTotal() {
    this.totalQuantity=0;
    this.total = 0;
    for (let i = 0; i < this.selectedProducts.length; i++) {
      this.total +=
        this.selectedProducts[i].price * this.selectedProducts[i].quantity;
        this.totalQuantity+=this.selectedProducts[i].quantity
    }
  }
  sendProduct(){
    this.AddToCartService.setCheckout(this.selectedProducts)
  }

  removeProduct(i: number) {
    this.selectedProducts.splice(i, 1);
    this.setTotal();
  }
  

  closed() {
    let x: any = document.getElementById('add');
    x.style.display = 'none';
  }

  openCart(){
  this.AddToCartService.openCart();
  }
  getCartItemsNum() {
    this.AddToCartService.openCart();
    this.AddToCartService.addItemsToCart(this.quantity);
  }

  openAddToCart(img: string, title: string, price: number, id: number) {
    this.AddToCartService.openAddToCart(img, title, price, id);
  }

  extend() {
    let x: any = document.getElementById('side-bar');
    x.style.right = '-400px';
    setTimeout(this.close, 500);
  }
  close() {
    let y: any = document.getElementById('bg');
    y.style.display = 'none';
  }

  ngOnInit(): void {}
}
