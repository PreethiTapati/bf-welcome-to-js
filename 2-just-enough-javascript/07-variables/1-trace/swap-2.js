// #todo

'use strict';

/* 1. declare 3 variables */

let a = 'y';
let b = 'x';
let temp;

/* 2. swap the values between a and b
  this is done using 3 assignments
*/

temp = b;
console.log(a, b, temp); // the values of a, b, and temp are logged
b = a;
console.log(a, b, temp); //  the values of a, b, and temp are logged
a = temp;
console.log(a, b, temp); //  the values of a, b, and temp are logged

/* 3. compare the final values
  all the comparisons should be true
*/

console.log(a === 'x'); // true
console.log(b === 'y'); // true
console.log(temp === 'x'); // true
