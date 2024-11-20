/** How to find prime Number in Javascript?
 *
 */

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// let res = isPrime(2);
// console.log(res);

// Finding All Prime Numbers in a Range

function findPrimeRange(start, end) {
  let box = [];
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      box.push(num);
    }
  }
  return box;
}
let res = findPrimeRange(1, 50);
console.log(res);
