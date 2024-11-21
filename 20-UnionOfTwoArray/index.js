/** How to find Union of two arrays in javascript?  */

let arr1 = [2, 3, 4, 5, 6, 7, 8];
let arr2 = [3, 5, 6, 7, 1, 9];

let unionArray = [...arr1, ...arr2];
console.log([...new Set(unionArray)]);
