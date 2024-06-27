import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';t

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewOneProductComponent } from './view-one-product/view-one-product.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatsComponent } from './chats/chats.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { BusinessprofileComponent } from './businessprofile/businessprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AddproductComponent,
    ViewProductsComponent,
    ViewOneProductComponent,
    ViewOrdersComponent,
    HomeComponent,
    SidenavComponent,
    StatsComponent,
    SettingsComponent,
    ChatsComponent,
    BottomNavComponent,
    BusinessprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
