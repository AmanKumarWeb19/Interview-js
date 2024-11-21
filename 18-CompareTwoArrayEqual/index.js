/** How to compare two array are equal or not in javascript? */

let arr1 = [1, 5, 3, 4, 2];
let arr2 = [1, 7, 2, 3, 5];

function CompareTwoArraySame(arr1, arr2) {
  // Check if the lengths are the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Sort both arrays
  let sortArr1 = arr1.sort((a, b) => a - b);
  let sortArr2 = arr2.sort((a, b) => a - b);

  // Compare the elements of both arrays
  for (let i = 0; i < sortArr1.length; i++) {
    if (sortArr1[i] !== sortArr2[i]) {
      return false;
    }
  }
  // If all elements are the same
  return true;
}
let res = CompareTwoArraySame(arr1, arr2);
console.log(res);
