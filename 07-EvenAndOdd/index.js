/** how to find Even and Odd number in a given array in javascript */

const array = [1, 3, 4, 2, 6, 7, 9, 8, 12, 13, 16];

function EvenNumber(arr) {
  return arr.filter((item) => item % 2 === 0);
}
const evenRes = EvenNumber(array);
console.log(evenRes);

function evenCheck(arr) {
  let evenBox = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenBox.push(arr[i]);
    }
  }
  return evenBox;
}
const evencheckres = evenCheck(array);
console.log(evencheckres);

//.........................................................................................................

function OddNumber(arr) {
  return arr.filter((item) => item % 2 !== 0);
}

const oddRes = OddNumber(array);
console.log(oddRes);

function OddNumberCheck(arr) {
  let oddBox = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddBox.push(arr[i]);
    }
  }
  return oddBox;
}

const oddBoxres = OddNumberCheck(array);
console.log(oddBoxres);
