/** How to find the missing number in a given integer array 1 to 10 */

const arrNum = [1, 2, 4, 5, 7, 8, 9, 10];

const missingValue = (arr) => {
  const missArr = [];

  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  for (let i = minValue; i <= maxValue; i++) {
    if (!arr.includes(i)) {
      missArr.push(i);
    }
  }
  return missArr;
};

const res = missingValue(arrNum);
console.log(res);
