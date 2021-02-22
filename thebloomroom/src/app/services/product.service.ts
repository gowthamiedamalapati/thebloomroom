import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
 
import { productsUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  
  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
 }
  postProducts(product:Product):Observable<any>{
    return this.http.post(productsUrl, product);
 }
 deleteProduct(id):Observable<any>{
   return this.http.delete(productsUrl +'/'+id);
 }
 updateProduct(id, updatedData):Observable<any>{
  return this.http.put(productsUrl +'/'+id, updatedData)
 }
getProductToUpdate(id){
  return this.http.get(productsUrl +'/'+id);
}
 
}
