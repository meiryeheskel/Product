
class FullTime extends BasicDate {
    private _hour: number;
    private _minutes: number;
    private _seconds: number;

    set hour(hour) {
        this._hour = hour >= 0 && hour <= 24 ? hour : 0;
    }
    get hour() {
        return this._hour;
    }
    set minutes(minutes) {
        this._minutes = minutes >= 0 && minutes <= 60 ? minutes : 0;
    }
    get minutes() {
        return this._minutes;
    }
    set seconds(seconds) {
        this._seconds = seconds >= 0 && seconds <= 60 ? seconds : 0;
    }
    get seconds() {
        return this._seconds;
    }
    constructor(day: number, year: number, month: number, hour: number, minutes: number, seconds: number) {
        super(day, year, month);
        this.hour = hour;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    toString() :string {
        
        return (super.toString() + `Time: ${this.hour}:${this.minutes}:${this.seconds}<br/>`);
    }

}