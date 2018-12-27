// ES6: Use class Syntax to Define a Constructor Function


function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'





// ES6: Use getters and setters to Control Access to an Object


function makeClass() {
  "use strict";
  /* Alter code below this line */
// class Thermostat {
//   constructor(Fahrenheit) {
//   this.Fahrenheit = Fahrenheit;
//   }
//   get temperature() {
//     return 5/9 * (F - 32);
//   }
//   set temperature(celsius) {
//     this.Fahrenheit = celsius * 9.0 / 5 + 32; 
//   }
// }
  class Thermostat{
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

