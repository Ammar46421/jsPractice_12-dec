// method 1
// import func, { divide, subtract, multiply } from './script.js';

// let div = divide(5, 2);
// let plus = func(3,9);
// let minus = subtract(5, 3);
// let mult = multiply(4, 3);

// divide()


// console.log(div); 
// console.log(plus); 
// console.log(minus); 
// console.log(mult); 


// method 2

import  * as script from './script.js';

let div = script.divide(5, 2);
let plus = script.add(3,9);
let minus = script.subtract(5, 3);
let mult = script.multiply(4, 3);



console.log(div); 
console.log(plus); 
console.log(minus); 
console.log(mult); 