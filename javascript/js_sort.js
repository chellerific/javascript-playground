/* JAVASCRIPT SORT THEORY AND USECASES */
let testArr = [9, 16, 74, 2, 34, 54];

const descending = testArr.sort((a, b) => b - a);
console.log('Descending ', descending);

const what = testArr.sort((a, b) => (a.totalCount > b.totalCount ? -1 : 0));
console.log('What ', what);
