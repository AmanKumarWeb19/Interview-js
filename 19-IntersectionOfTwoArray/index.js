/** how to find the intersection of two array/sets in javascript? */

let arr1 = [2, 3, 4, 5, 1, 9, 5];
let arr2 = [4, 5, 6, 7, 8, 9, 2, 2];

function IntersectionArray(arr1, arr2) {
  // Convert arr2 to a Set for faster lookups
  const set2 = new Set(arr2);

  // Filter arr1 and find elements that are in set2
  const intersection = arr1.filter((ele) => {
    return set2.has(ele);
  });

  // Remove duplicates using Set and log the result
  console.log([...new Set(intersection)]);
}
IntersectionArray(arr1, arr2);
