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

function fruit() {
  console.log(name); //Undefined
  console.log(number); // ReferenceError: Cannot access 'number' before initialization

  var name = "apple";
  let number = 10;
}
fruit();

// question 7 :-
