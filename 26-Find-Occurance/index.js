/** Program to Find Number of Occurrences of a character in a String in Javascript? */

function NumberOccurrence(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
let str = "javascript";
let char = "a";
let res = NumberOccurrence(str, char);
console.log(res);
