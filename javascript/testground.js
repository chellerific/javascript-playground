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

const isSquare = function(n) {
  return n < 0 && Math.sqrt(n) % 1 === 0;
};
