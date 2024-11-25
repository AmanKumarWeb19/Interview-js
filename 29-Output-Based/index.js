/** OUTPUT BASED:- */

// Question :1 (Which result print first in the console.log())
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(4);

// Question:2 What is the output of this setTimeout function:
// setTimeout(() => {
//   console.log(i);
//   var i = 10;
// }, 1000);

// Question 3:-
// What is the output of this function:-

// let count = 0;
// function printCount() {
//   if (count === 0) {
//     let count = 3;
//     console.log("count1:-", count);
//   }
//   console.log("count2:-", count);
// }
// printCount();

// Question 4:-
// What is the output of this function:-

// console.log(2 + "2");
// console.log(2 - "2");
// console.log("2" - 2);

// Question 5:- Difference between Map and ForEach method:-
// const arrNum = [1, 2, 3, 4, 5];

// const mapMethod = arrNum.map((num) => {
//   return num + 3;
// });
// console.log(mapMethod);

// let box = [];
// const ForEachMethod = arrNum.forEach((res) => {
//   box.push(res + 8);
// });
// console.log(ForEachMethod);
// console.log(box);

// Question 6:- hoisting

// function fruit() {
//   console.log(name); //Undefined
//   console.log(number); // ReferenceError: Cannot access 'number' before initialization

//   var name = "apple";
//   let number = 10;
// }
// fruit();

// question 7 :-

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// Output will be 3 3 3

// question 8 :-

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// Output will be 0 1 2

// 9
// console.warn(+true);
// console.warn(typeof +true);

//10
// console.warn(!"Anil");
// console.warn(typeof "Anil");

//11
// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]); //small
// console.log(bird.size); //small
// console.log(bird["size"]); //small
// console.log(bird.data); // undefined

//12

// let c = { name: "Aman" };
// let d;

// d = c;
// c.name = "musa";
// console.log(d.name); // musa will be the answer

//13

// var x;
// var x = 10;
// console.log(x); // output will be 10

// 14

// var x;
// let x = 10;
// console.log(x); // SyntaxError: Identifier 'x' has already been declared

// 15

// let a = 3;
// console.log(typeof a); // type is number
// let b = new Number(3);
// console.log(typeof b); // type is object

// console.log(a == b); // true because data is same
// console.log(a === b); // false because data is same but type is not same

// 16

// let name;
// nmae = {};
// console.log(name); // undefined

// 17

// function fruit() {
//   console.log("woof!");
// }
// fruit.name = "apple";
// fruit();

// 18

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, "2"));

//19

// let num = 0;
// console.log(num++); // 0
// console.log(++num); // 2
// console.log(num); // 2

// 20

// function getAge(...arg) {
//   console.log(typeof arg); // object
// }
// getAge(21);

function getAge() {
  "use strict";
  age = 20;
  console.log(age); //ReferenceError: age is not defined because we using "use strict."
}
getAge();
