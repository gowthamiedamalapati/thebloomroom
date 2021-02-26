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
  productAttr = ['id','name','description','price','image','category'];
  updatedData:Product;
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

  showProducts(){
    this.visible=true;
    this.productservice.getProducts().subscribe((products)=>{
      this.productList=products;  
    });
  }
  hideProducts(){
    this.visible=false;
  }
  addProduct(){
  this.productservice.postProducts(this.product).subscribe(()=>{
    this.product={
      id:0,
      name:"",
      description:"",
      price:0,
      image:"",
      category:"",
    }
  });
  }
  edit(i){
    this.product=this.productList[i];

   }
   updateProduct(){
  this.productservice.updateProduct(this.product.id, this.product).subscribe((result)=>{
  this.showProducts();
  this.product={  //How to empty object dynamically
    id:0,
    name:"",
    description:"",
    price:0,
    image:"",
    category:"",
  }
  });
   }
  delete(id){
    console.log(id);
   this.productservice.deleteProduct(id).subscribe((result)=>{
     this.showProducts();
   })
  }
}
