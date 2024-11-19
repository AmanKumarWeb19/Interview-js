// How to find duplicates elements in a given array?

function duplicates(arr) {
  let obj = {};
  let box = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let count = 1;

  for (let key in obj) {
    if (obj[key] > count) {
      box.push(Number(key));
    }
  }
  return box;
}
const arrNumber = [1, 2, 8, 9, 2, 8];
console.log(duplicates(arrNumber));
