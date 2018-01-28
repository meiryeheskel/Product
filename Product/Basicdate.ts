
class BasicDate {
    private _day: number;
    private _year: number;
    private _month: number;

    set day(day) {
        this._day = day >= 1 && day <= 31 ? day : 1;
    }
    get day() {
        return this._day;
    }
    set year(year) {
        this._year = year >= 2020 && year <= 2050 ? year : 2020;
    }
    get year() {
        return this._year;
    }
    set month(month) {
        this._month = month >= 1 && month <= 12 ? month : 1;
    }
    get month() {
        return this._month;
    }
    constructor(day: number, year: number, month: number) {
        this.day = day;
        this.year = year;
        this.month = month;
    }
    toString():string {
        return(`${this.day}/${this.month}/${this.year}<br/>`);
    }


}