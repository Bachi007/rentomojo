import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { ViewvehiclesComponent } from './viewvehicles/viewvehicles.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { ManageComponent } from './manage/manage.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    HomeComponent,
    ViewvehiclesComponent,
    VehicledetailsComponent,
    WishlistComponent,
    CartComponent,
    AdminhomeComponent,
    ViewordersComponent,
    AddvehiclesComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
