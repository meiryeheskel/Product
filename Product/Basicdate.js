var BasicDate = /** @class */ (function () {
    function BasicDate(day, year, month) {
        this.day = day;
        this.year = year;
        this.month = month;
    }
    Object.defineProperty(BasicDate.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (day) {
            this._day = day >= 1 && day <= 31 ? day : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (year) {
            this._year = year >= 2020 && year <= 2050 ? year : 2020;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (month) {
            this._month = month >= 1 && month <= 12 ? month : 1;
        },
        enumerable: true,
        configurable: true
    });
    BasicDate.prototype.toString = function () {
        return (this.day + "/" + this.month + "/" + this.year + "<br/>");
    };
    return BasicDate;
}());
//# sourceMappingURL=Basicdate.js.map