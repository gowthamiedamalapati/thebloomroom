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
  checkedCategory=[
    {category:"Flowers", ischecked:false},
    {category:"Bouquet", ischecked:false},
    {category:"Cakes", ischecked:false},
    {category:"Combos", ischecked:false}
  ]
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  this.productService.getProducts().subscribe((products)=>{
    this.productList=products
  });
  }
  applyFilter(){
  
  }

}
