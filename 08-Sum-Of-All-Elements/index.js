/** How to find the sum of all the elements in a given array in javascript */

const array = [2, 3, 5, 6, 7, 8];

function SumOfAllElement(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}
let res = SumOfAllElement(array);
console.log(res);

function sumElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
sumElements(array);
