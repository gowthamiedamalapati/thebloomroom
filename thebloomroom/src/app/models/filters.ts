import { Product } from "./product";

export class Filters {
    category: string;
    productId:number;
    productTitle:string;
    productDescription:string;
    productPrice:number;
    produductImage:string;
    productCategory:string

    constructor(category:string,product:Product){
        this.category=category;
        this.productId = product.id;
        this.productTitle = product.name;
        this.productDescription = product.description;
        this.produductImage = product.image;
        this.productPrice = product.price; 
        this.productCategory = product.category
    }
}
