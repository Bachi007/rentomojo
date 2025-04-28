import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { ViewvehiclesComponent } from './viewvehicles/viewvehicles.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { CartComponent } from './cart/cart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'view',component:ViewvehiclesComponent},
      {path:'orders',component:ViewordersComponent},
      {path:'cart',component:CartComponent},
      {path:'details/:vid',component:VehicledetailsComponent}
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:AdminhomeComponent},
      {path:'add',component:AddvehiclesComponent},
      {path:'manage',component:ManageComponent},
      {path:'view',component:ViewvehiclesComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
