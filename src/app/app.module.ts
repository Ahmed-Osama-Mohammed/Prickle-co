import { AddToCartService } from './services/add-to-cart.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedserviceService } from './services/sharedservice.service';
import { UsersDataService } from './services/users-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { OrderFormComponent } from './home/order-form/order-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { CactiComponent } from './cacti/cacti.component';
import { PlantsComponent } from './plants/plants.component';
import { SucculentsComponent } from './succulents/succulents.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './faq/faq.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    OrderFormComponent,
    ContactsComponent,
    AppFooterComponent,
    CactiComponent,
    PlantsComponent,
    SucculentsComponent,
    AllProductsComponent,
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    FaqComponent,
    AddToCartComponent,
    CheckoutComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
  SharedserviceService,
  UsersDataService,
  AddToCartService,
  NavBarComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
