/** program to print star and number patterns Right Triangle,Pyramid,and Diamond Shape in javascript? */

/** Right Triangle */

// function RightTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let bag = "";
//     for (let j = 1; j <= i; j++) {
//       bag = bag + "* ";
//     }
//     // console.log(bag);
//   }
// }
// RightTriangle(6);

/** Pyramid :- */

// function Pyramid(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let bag = "";
//     for (let j = 1; j <= rows - i; j++) {
//       bag = bag + " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       bag = bag + "*";
//     }
//     console.log(bag);
//   }
// }
// Pyramid(6);

/** Diamond:-- */

function Diamond(rows) {
  for (let i = 1; i <= rows; i++) {
    let bag = "";
    for (let j = 1; j <= rows - i; j++) {
      bag = bag + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      bag = bag + "*";
    }
    console.log(bag);
  }
  for (let i = rows - 1; i >= 1; i--) {
    let bag = "";
    for (let j = 1; j <= rows - i; j++) {
      bag = bag + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      bag = bag + "*";
    }
    console.log(bag);
  }
}
Diamond(6);
