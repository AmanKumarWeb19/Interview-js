/** How to find Palindrome in JavaScript? */

// Simple Approach:---

function Palindrome(str) {
  let StrToArray = str.split(""); // Change Str into Array
  let ReversedArray = StrToArray.reverse(); // reverse the array
  let reverseArrayToStr = ReversedArray.join(""); // change reverse array into string

  if (reverseArrayToStr === str) {
    return true;
  } else {
    return false;
  }
}
let res = Palindrome("madam");
// console.log(res);

// Convert Number to Strings:-----

function ConvertNumberPalindrome(input) {
  let str = input.toString(); // first convert number into string

  //now reverse the string

  let reversed = str.split("").reverse().join("");

  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}

let numberCheckPalindrome = ConvertNumberPalindrome(1881);
console.log("NumberCheckPalindrome", numberCheckPalindrome);