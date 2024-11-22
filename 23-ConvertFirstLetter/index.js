/** Program to convert First letter of a string into UpperCase in Javascript? */

function FirstLetterUpperCase(str) {
  let newStr = str.split(" "); // Split the string into an array of words

  let newArr = newStr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return newArr.join(" ");
}

let res = FirstLetterUpperCase("aman kumar");
console.log(res);

/** Explanation:
str.split(" "): Splits the string into an array of words using spaces as separators.

map(): Iterates over each word and:-

a. word.charAt(0).toUpperCase(): Converts the first character to uppercase.
b. word.slice(1): Keeps the rest of the word as it is.

join(" "): Joins the array back into a single string with spaces between words.

This will correctly capitalize the first letter of every word.

 */
