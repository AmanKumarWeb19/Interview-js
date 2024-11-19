/** How to find Second Largest value in a given array in javascript?
 *
 * 4 Step to find second largest value.
 * a. find the largest value from an array.
 * b. find the index of the largest value from an array.
 * c. delete index from array using splice method.
 * d. Apply same logic that use for find the largest value.
 *
 */

/** 
 * 
  function largestNumber(arr) {
  let firstLargest = Math.max(...arr);
  let index = arr.indexOf(firstLargest);
  arr.splice(index, 1);
  let secondLargest = Math.max(...arr);
  return secondLargest;
}
let res = largestNumber(intArray);
console.log(res); 


Your solution works correctly in most cases but has a critical issue: it modifies the original array by using splice(). This could lead to unexpected behavior if the original array is needed later.

Key Improvements:
Avoids modifying the input array: By using filter(), a new array is created without the largest element, leaving the original array intact.
Handles duplicate largest values: The filter() ensures that all occurrences of the largest number are removed, so secondLargest correctly finds the next largest number.


When to Use Your Code:
Your original code is acceptable when:

You don't need the original array after the operation.
You are okay with modifying the array directly.
However, in real-world coding practices, avoiding side effects (like modifying input arrays) is generally preferred.

*/

const intArray = [2, 5, 9, 45, 8, 10];

function largestNumber(arr) {
  let firstLargest = Math.max(...arr);
  let filteredArray = arr.filter((num) => num !== firstLargest);
  let secondLargest = Math.max(...filteredArray);
  return secondLargest;
}
let res = largestNumber(intArray);
console.log(res);
