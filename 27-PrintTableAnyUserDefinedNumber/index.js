/** Program to print the table of any user defined number using function in javascript? */

function table(number) {
  for (let i = 1; i <= 10; i++) {
    let res = i * number;
    console.log(`${number} * ${i} = ${res}`);
  }
}
table(4);
