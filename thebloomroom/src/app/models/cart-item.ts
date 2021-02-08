import { Product } from "./product";

export class CartItem {
    id: number;
    productId : number;
    productTitle: string;
    qty: number;
    price: number;
    category: string;

    constructor(id: number, product: Product, qty=1){
        this.id = id;
        this.productId = product.id;
        this.productTitle = product.name;
        this.price = product.price;
        this.qty = qty;
        this.category= product.category;
    }
}

