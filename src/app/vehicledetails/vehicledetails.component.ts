import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-vehicledetails',
  standalone: false,
  templateUrl: './vehicledetails.component.html',
  styleUrl: './vehicledetails.component.css'
})
export class VehicledetailsComponent {

  vehicleid:any;vehicle:any;

  flag=false;

  addtofav(){
    this.flag=!this.flag
  }

  constructor(private act:ActivatedRoute,private service:VehicleService,private cartService:CartService,private bs:Router){}
  
  ngOnInit(){
    this.vehicleid=this.act.snapshot.paramMap.get('vid')
    console.log(this.vehicleid)

  this.vehicle=this.service.getVehicleById(this.vehicleid);
    console.log(this.vehicle)
  }
  addtocart(vobj:any){
    this.cartService.addtocart(vobj);
    this.bs.navigateByUrl("/user/cart")
  }




}
