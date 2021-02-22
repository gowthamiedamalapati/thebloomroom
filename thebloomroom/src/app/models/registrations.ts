export class Registrations {
    name: string;
    username: string;
    emailId: string;
    phoneNumber: number;
    password: string;
    cart:[];

    constructor(name:string, username:string, emailId:string, phoneNumber:number, password:string, cart){
        this.name=name;
        this.username=username;
        this.emailId=emailId;
        this.phoneNumber=phoneNumber;
        this.password=password;
        this.cart=[];
    }
}
