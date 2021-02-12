import { Component, OnInit } from '@angular/core';
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
  this.productService.getProducts().subscribe((products)=>{
    this.productList=products
    this.originalList=products
  });
  }
  applyFilter(){
    this.filteredCategory=this.checkedCategory.filter(x=>x.ischecked==true).map(x=>x.category)
      for(let i=0; i<this.filteredCategory.length; i++){
      for(let j=0; j<this.productList.length; j++){
    if(this.filteredCategory[i]==this.productList[j].category){
     this.filteredProducts.push(this.productList[j])
     
   }
  }
 }
 console.log(this.filteredProducts)
 this.productList=this.filteredProducts
}

}
