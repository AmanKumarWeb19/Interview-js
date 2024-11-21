/** How to merge two arrays and sort them in javascript? */

// Method 1:- Concate Method

let arr1 = [12, 14, 4, 6, 7, 18, 1];
let arr2 = [2, 3, 5, 9, 10, 11, 13];

let finalArr = arr1.concat(arr2);
let sortArr = finalArr.sort((a, b) => {
  return a - b;
});
console.log("concatenate method:--", sortArr);

// Method 2:- Spread operator:-........................................................................

let spread = [...arr1, ...arr2];
let spreadSort = spread.sort((a, b) => {
  return a - b;
});

console.log("spread operator--", spreadSort);

// Method 3:- Using for Loop:-......................................................................

function mergeTwoArray(arr1, arr2) {
  // Create an empty array to store the merged result
  let mergedBox = [];

  // Use a for loop to add elements from arr1 to mergedArr
  for (let i = 0; i < arr1.length; i++) {
    mergedBox.push(arr1[i]);
  }

  // Use a for loop to add elements from arr2 to mergedArr
  for (let j = 0; j < arr2.length; j++) {
    mergedBox.push(arr2[j]);
  }

  // Sort the merged array in ascending order
  mergedBox.sort((a, b) => a - b);

  return mergedBox;
}
let mergerThirdMethod = mergeTwoArray(arr1, arr2);
console.log("mergerThirdMethod:--", mergerThirdMethod);
