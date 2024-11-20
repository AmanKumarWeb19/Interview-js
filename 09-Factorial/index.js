/** How to find factorial(n!) of a given number in javascript?
 *
 * The Factorial of a number is the product of all number from 1 to that number.
 *
 * for Example:- Factorial of 5 is Equal to 5!=1*2*3*4*5 = 120
 *
 * Factorial of negative number is not Possible.
 *
 */

function factorial(n) {
  let fact = 1;
  if (n < 0) {
    console.log(`Factorial of ${n} is not Possible`);
  } else {
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
  }
  console.log(`Factorial of ${n} is ${fact}`);
}
factorial(10);
