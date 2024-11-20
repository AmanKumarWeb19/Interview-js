/** Differences between Filter and Find Method.
 *
 * Filter :-
 *
 * Filter() method returns the matched values in an array from the collection.
 *
 *
 * Find :-
 * Find() method returns the first value that matches from the collection,
 * Once it matches the value in findings,
 * it will not check the remaining values in the array collection.
 */

// Filter:-
const empArr = [
  { name: "Aman", age: 28 },
  { name: "Akash", age: 20 },
  { name: "Raj", age: 45 },
  { name: "Adi", age: 26 },
  { name: "Rohit", age: 40 },
  { name: "Rahul", age: 30 },
];

const filtered = empArr.filter((item) => item.age > 30 || item.age >= 30);
console.log(filtered);

// Find:-
const fined = empArr.find((item) => item.age > 25);
console.log(fined);
