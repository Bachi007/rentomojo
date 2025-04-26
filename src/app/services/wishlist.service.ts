import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  orders:any=[]

  placeorder(obj:any){
    this.orders.push(obj);
    return "order placed";
  }

  //for admin
  getallorders(){
    return of (this.orders)
  }

  getOrdersbyUsername(uname:any){
    return of(this.orders.filter((e:any)=>e.username==uname));
  }



}
