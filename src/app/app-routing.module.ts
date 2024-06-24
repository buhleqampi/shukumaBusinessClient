import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewOneProductComponent } from './view-one-product/view-one-product.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {path : 'admin', component: AdminDashboardComponent},
  {path : 'addproduct', component: AddproductComponent},
  {path : 'oneproduct', component: ViewOneProductComponent},
  {path : 'view products', component: ViewProductsComponent},
  {path : 'Orders', component: ViewOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
