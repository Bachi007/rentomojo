import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartitems:any=[];total:any;
  constructor(private service:CartService,private order:WishlistService){}
  user:any;username:any;address:any;
 
  temp:any
  addtotemp(vobj:any){
    this.temp=vobj;
  }
  orderedvehicle:any;result:any;
  booknow(){
    this.orderedvehicle={
      id:this.temp.id,
      name:this.temp.name,
      pricePerDay:this.temp.pricePerDay,
      imageUrl:this.temp.imageUrl,
      username:this.username,
      address:this.address
    }
  this.result=  this.order.placeorder(this.orderedvehicle);
  alert(this.result)
    console.log(this.orderedvehicle)
    this.cartitems=null;
  }


 
  ngOnInit(){

    this.user=localStorage.getItem('loggedin');
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    console.log(this.username)

    this.service.getCartitems().subscribe((res)=>{
      this.cartitems=res;
    })
    this.total= this.service.gettotalprice();
  }

}
