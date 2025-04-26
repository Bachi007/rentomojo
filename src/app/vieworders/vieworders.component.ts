import { Component } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-vieworders',
  standalone: false,
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent {

  user:any;username:any;
  orders:any;
  constructor(private order:WishlistService){}
  
  ngOnInit(){

    this.user=localStorage.getItem('loggedin');
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    this.order.getOrdersbyUsername(this.username).subscribe((res)=>
      this.orders=res
    
    )
  }
}
