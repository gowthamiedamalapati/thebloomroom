import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []
  cartTotal =0

  constructor(
    private msg:MessengerService,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
    this.handleSubcription();
    this.loadCartItems();
  }
  handleSubcription(){
    this.msg.getMsg().subscribe((product:Product)=>{
    this.loadCartItems();
   })
  } 
  loadCartItems(){
   this.cartService.getCartItems().subscribe((items:CartItem[]) =>{
   this.cartItems=items;
   this.calCartTotal();
   })
 }
  addProductToTheCart(product){  
this.calCartTotal();
 }
  calCartTotal(){
   this.cartTotal=0
   this.cartItems.forEach(item =>{
   this.cartTotal += (item.qty* item.price)
   })
  }
}