import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];
  originalList: Product[] = [];
  filteredCategory=[]
  filteredProducts=[]
  
  checkedCategory=[
    {category:"Flowers", ischecked:false},
    {category:"Bouquet", ischecked:false},
    {category:"Cakes", ischecked:false},
    {category:"Combos", ischecked:false}
  ]
  constructor(private productService : ProductService) { }
   
  onChange(){
    
  }

  ngOnInit(): void {
  this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      this.productList=products
      this.originalList=products
    });
  }
  applyFilter(){
    this.filteredCategory=this.checkedCategory.filter(x=>x.ischecked==true).map(x=>x.category)
    console.log(this.filteredCategory)
      for(let i=0; i<this.filteredCategory.length; i++){
      for(let j=0; j<this.productList.length; j++){
    if(this.filteredCategory[i]==this.productList[j].category){
     this.filteredProducts.push(this.productList[j])  
   }
  }
 }
 this.productList=this.filteredProducts
}
clearAll(form: NgForm){
  form.reset();
   this.loadProducts();

}

}
