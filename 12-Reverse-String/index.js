/** How to reverse a string in javascript? */

function reverseString(str) {
  let strToArr = str.split("");
  let arrReverse = strToArr.reverse();
  let strReverse = arrReverse.join("");
  return strReverse;
}
let res = reverseString("butter");
console.log(res);

//.................................................................................................

function reverseStr(str) {
  let bag = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bag = bag + str[i];
  }
  return bag;
}
let reverse = reverseStr("Aman");
console.log(reverse);

//...............................................................................................

function reverseWord(str) {
  let words = str.split(); // Split the string into words array
  let result = []; //Initialize an array to store reversed word

  for (let word of words) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed = reversed + word[i]; // Reverse the current word
    }
    result.push(reversed); // Add the reversed word to the result array
  }
  return result.join(""); // Join the reversed words into a single string
}
let result = reverseWord("Aman Kumar");
console.log(result);
