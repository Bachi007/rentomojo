import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:vehicle[]=[]

  constructor() { }

  addtocart(vobj:any){
    this.cart.push(vobj)
  }

  cartLen(){
    return this.cart.length;
  }

  getCartitems(){

    return of(this.cart)

  }

  deletecartitem(vid:any){
    let ind=this.cart.findIndex((e)=>e.id==vid);

    this.cart.splice(ind,1);
    return "deleted"

  }

  gettotalprice(){
    return  this.cart.reduce((acc,e)=>e.pricePerDay+acc,0)
  }

}
