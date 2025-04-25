import { Component } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewvehicles',
  standalone: false,
  templateUrl: './viewvehicles.component.html',
  styleUrl: './viewvehicles.component.css'
})
export class ViewvehiclesComponent {

  vehicles:any;
  constructor(private service:VehicleService,private router:Router){}
  ngOnInit(){
      this.service.getAll().subscribe((res)=>{
        this.vehicles=res;
      })
  } 

  detail(vid:any){
    this.router.navigateByUrl("/user/details/"+vid)
    console.log(vid);

  }

}
