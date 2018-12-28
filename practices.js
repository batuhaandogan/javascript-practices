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




// ES6: Understand the Differences Between import and require


"use strict";
capitalizeString("hello!");
import {capitalizeString} from "string_functions"


// ES6: Use export to Reuse a Code Block

"use strict";
export const foo = "bar";
export const bar = "foo";


// ES6: Use * to Import Everything from a File

"use strict";

import * as myFirstStrict from "capitalize_strings";


// ES6: Create an Export Fallback with export default

"use strict";
export default function subtract(x,y) {return x - y;}

//  export default function subtract(x,y) {
//     return x - y;
// }



// ES6: Import a Default Export



"use strict";
subtract(7,4);

import subtract from "math_functions