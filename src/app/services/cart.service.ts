import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';

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

}
