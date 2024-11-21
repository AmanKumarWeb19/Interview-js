/** How to find Factor of a Given Integer in javascript? */

function FindFactor(number) {
  let factorBox = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factorBox.push(i);
    }
  }
  return factorBox;
}
let res = FindFactor(12);
console.log(res);
