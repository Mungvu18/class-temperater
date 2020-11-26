class Temperature {
    constructor(Celcius) {
        this.Celcius = Celcius;
    }
    getConvertCF() {
        return this.Celcius*9/5+32;
    }
    getConvertCK() {
        return  this.Celcius+273.15;
    }
}
let Temperature1 = new Temperature(25);
let temperatureK = Temperature1.getConvertCK();
let temperatuerF = Temperature1.getConvertCF();
let temp = new Temperature(50);
document.write(temp.getConvertCF()+"..."+temp.getConvertCK())
alert("Do k:"+temperatureK+"do f:" +temperatuerF);