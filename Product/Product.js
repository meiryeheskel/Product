var Product = /** @class */ (function () {
    function Product(productname, price, day, year, month, hour, minutes, seconds) {
        this.productName = productname;
        this.price = price;
        this.expirydate = new FullTime(day, year, month, hour, minutes, seconds);
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price > 0 ? price : 0;
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.toString = function () {
        return ("Product name: " + this.productName + "<br>Price: $" + this.price + "<br/>Expiry Date: " + this.expirydate);
    };
    return Product;
}());
//# sourceMappingURL=Product.js.map