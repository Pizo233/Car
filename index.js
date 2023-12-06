//The Class Car
class Car {
  constructor(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

getMake() {
  return this.make;
}

getModel(){
  return this.model;
}

getYear(){
  return this.year;
}

getColor(){
  return this.color;
}

setMake(newMake){
  this.make = newMake;
}

setModel(newModel){
  this.model = newModel;
}

setYear(newYear){
  this.year = newYear;
}

setColor(newColor){
  this.color = newColor;
}
}

//instance of the Car class
let myCar = new Car("Toyota","Camry",2020,"Silver");

//Print Car's property by using the defined methods
console.log("Make:", myCar.getMake());
console.log("Model:", myCar.getModel());
console.log("Year:", myCar.getYear());
console.log("Color:", myCar.getColor());
