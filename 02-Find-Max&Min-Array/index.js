// How to find max and min value in a given Array in Javascript?

const arrNumber = [2, 7, 90, 50, 8];

function FindMaxAndMin(arr) {
  let maxNumber = Math.max(...arr);
  let minNumber = Math.min(...arr);
  return { maxNumber, minNumber };
}
// console.log(FindMaxAndMin(arrNumber));

function MaxMin(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}
let res = MaxMin(arrNumber);
console.log(res);
