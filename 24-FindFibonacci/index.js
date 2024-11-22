/** Program How to find fibonacci sequence in javascript? */

function Fibonaccie(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    console.log(temp);
  }
}
Fibonaccie(15);
