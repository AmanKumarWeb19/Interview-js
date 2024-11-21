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
