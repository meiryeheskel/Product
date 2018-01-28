
class Product {
    productName: string;
    private _price: number;
    expirydate: FullTime;
    
    set price(price) {
        this._price = price > 0 ? price : 0;
    }
    get price() {
        return this._price;
    }
    constructor(productname: string, price: number, day:number,year:number,month:number,hour:number,minutes:number,seconds:number) {
        this.productName = productname;
        this.price = price;
        this.expirydate = new FullTime(day,year,month,hour,minutes,seconds);
    }
    toString():string {
        return (`Product name: ${this.productName}<br>Price: $${this.price}<br/>Expiry Date: ${this.expirydate}`);
        
    }
}