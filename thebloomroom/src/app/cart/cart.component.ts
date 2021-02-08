import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []
  cartTotal =0

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product:Product)=>{
       this.addProductToTheCart(product) 
 })
}
addProductToTheCart(product){

  let productExists = false
  for(let i in this.cartItems){
    if(this.cartItems[i].productId === product.id){
      this.cartItems[i].qty++
      productExists=true
      break;
   }
 }
  if(!productExists){
    this.cartItems.push({
      productId:product.id,
      productName: product.name,
      qty:1,
      price: product.price
    })
  }
  
this.cartTotal=0
this.cartItems.forEach(item =>{
this.cartTotal += (item.qty* item.price)
})
}
}