/** Program to check Armstrong Number in javascript?
 *
 * What is an ArmStrong number?
 *
 * In the case of an armstrong number of 3 digits the sum of the cubes of each digits
 * is equal to the number itself. for example:-
 * 371 is an ArmStrong number because:-
 *
 * 371= 3*3*3* + 7*7*7 + 1*1*1
 * 371 = 27 + 343 + 1
 */

function ArmStrong(number) {
  let digits = number.toString();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = Number(digits[i]);
    sum += digit ** 3;
  }
  if (sum === number) {
    console.log(`${number} is an Armstrong number.`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }
}
ArmStrong(321);
