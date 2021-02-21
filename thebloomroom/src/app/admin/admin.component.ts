import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productList:Product[]=[];
  headers = ['Product Id','Product Name','Product Description','Product Price','Product Image','Product Category','Action'];
  index = ['id','name','description','price','image','category'];
  visible:boolean=false;
  product={
    id:0,
    name:"",
    description:"",
    price:0,
    image:"",
    category:"",
  }
   
  constructor(private productservice: ProductService) { }
  

  ngOnInit(): void {
    
  }
  onclick(){
    this.visible=true;
  }

  showproducts(){
    this.productservice.getProducts().subscribe((products)=>{
      this.productList=products;
       
    });
  }
  addProduct(){
  console.log(this.product);
  this.productservice.postProducts(this.product).subscribe();
  }
  editProduct(){

  }
  deleteProduct(){

  }
}
