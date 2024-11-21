/** How to Swap two variables without using third variable in javascript */

// Method 1:-Simple Method using Third Variable:-------------------------------------

let a = 10;
let b = 15;

let temp = a;
a = b;
b = temp;
console.log(`value of a is ${a} and value of b is ${b}`);

// Using Method 2: Using Arithmetic (Addition and Subtraction)

let x = 12;
let y = 17;

x = x + y; // x becomes (12 + 17)-> 29
y = x - y; // y becomes (29-17)-> 12
x = x - y; // x becomes (29-12)-> 17

console.log(`value of x is ${x} and value of y is ${y}`);

// Method 3: Using Array Destructuring (Modern JavaScript)

let m = 5;
let n = 8;

[m, n] = [n, m];
console.log(`value of m is ${m} and value of n is ${n}`);
