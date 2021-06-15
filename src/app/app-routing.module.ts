import { CheckoutComponent } from './checkout/checkout.component';
import { FaqComponent } from './faq/faq.component';
import { PlantsComponent } from './plants/plants.component';
import { CactiComponent } from './cacti/cacti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SucculentsComponent } from './succulents/succulents.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component: HomeComponent},
  { path:'cacti', component: CactiComponent},
  { path:'plants', component: PlantsComponent},
  { path:'succulents',component: SucculentsComponent},
  { path:'shop-all',component: AllProductsComponent},
  { path:'cacti/shop-all',component: AllProductsComponent},
  { path:'plants/shop-all',component: AllProductsComponent},
  { path:'succulents/shop-all',component: AllProductsComponent},
  { path:'faq',component: FaqComponent},
  { path:'checkout',component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
