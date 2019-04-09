/* JAVASCRIPT REDUCE THEORY AND USECASES */

/* reduce() executes a callback function on all items of the
array and allows to progressively compute a result. If
initialValue is specified, accumulator in the first iteration
will equal to that value */
[1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator * currentValue;
}, 1);

/*
iteration 1: 1 * 1 => return 1
iteration 1: 1 * 2 => return 2
iteration 1: 2 * 3 => return 6
iteration 1: 6 * 4 => return 24

return value is 24
*/
