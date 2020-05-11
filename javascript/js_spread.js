/* JAVASCRIPT SPREAD OPERATOR CHEAT SHEET */

// Copying an array
let names = ['Kim', 'Mari', 'Haneul'];
let newArr = [...names];

// Concatenating arrays
let arr1 = ['C', 'H', 'E'];
let arr2 = ['L', 'S', 'I'];
let result = [...arr1, ...arr2];

// Merge elements together with an invidividual
let ffviiArr = ['Cloud', 'Tifa', 'Aerith'];
let newFFVII = ['Barrett', ...ffviiArr];

// Function calls
let ffviiiArr = ['Squall', 'Laguna', 'Rinoa'];
const getNames = (f1, f2, f3) => {
  console.log(`Names: ${f1}, ${f2} and ${f3}`);
};

getNames(...names);

// Object literals
const MariID = {
  id: 999,
  name: 'Mari',
};

const MariBio = {
  age: '14',
  island: 'Zolis',
};

const Mari = { ...MariID, ...MariBio };

const example = 'Architect';

const obj = { ...(example && { example }) };
console.log('Object ', obj);
