// /* THIS IS WHERE WE TEST FUNCTIONS! */

// function sumDigPow(a, b) {
//   let result = [];
//   for (i = a; i <= b; i++) {
//     if (i === getSum(i)) {
//       result.push(i);
//     }
//     console.log('i is ' + i);
//     console.log('sum is ' + getSum(i));
//   }
//   return result;
// }

// function getSum(num) {
//   let sum = ('' + num)
//     .split('')
//     .map(function(value, index) {
//       return Math.pow(parseInt(value), index + 1);
//     })
//     .reduce(function(accumulator, value) {
//       return accumulator + value;
//     }, 0);
//   return sum;
// }

// console.log(sumDigPow(1, 100));
// console.log(getSum(135));

// const isSquare = function(n) {
//   return n < 0 && Math.sqrt(n) % 1 === 0;
// };

// PART 1 - Horizontal chart

// let array = [2, 0, 3, 4];
// const drawChart = array => {
//   array.forEach(element => {
//     if (element > 0) {
//       let newArr = new Array(element);
//       for (let i = 0; i < newArr.length; i++) {
//         newArr[i] = '-';
//       }
//       console.log(newArr.join('') + '\n');
//     } else {
//       console.log('' + '\n');
//     }
//   });
// };

// drawChart(array);

// PART 2 - Vertical chart

let array = [2, 0, 3, 4];
const drawChart = array => {
  let rowsLength = Math.max(...array) - 1;
  const matrix = [...Array(4).fill(' ')].map(elem => Array(4).fill(' '));

  for (let i = 0; i < array.length; i++) {
    for (let j = rowsLength; j > rowsLength - array[i]; j--) {
      matrix[j][i] = '|';
    }
  }

  matrix.forEach(elem => {
    console.log(elem.join(''));
  });
  console.log(matrix);
};

drawChart(array);
