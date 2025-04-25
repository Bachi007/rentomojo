import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-userdashboard',
  standalone: false,
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

  len:any;
  constructor(private cartService:CartService){}
  ngDoCheck(){
    this.len=  this.cartService.cartLen();
  }


}
