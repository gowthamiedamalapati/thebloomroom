export class Product {
    id : number;
    name : string;
    description : string;
    price : number;
    image : string;
    category : string

    constructor(id=1, name='', description='', price=0, image='', category='flower' ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category

    }
}
