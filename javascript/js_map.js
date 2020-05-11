/* JAVASCRIPT MAP THEORY AND USECASES */

/*
 * Example of getting a specific subset of properties from an object
   where dataset has a lot more properties and we specify which
   properties we only want
*/
const getNewArray = dataset.map(({ Title, Year, Plot, Genre, Actors }) => ({
  Title,
  Year,
  Plot,
  Genre,
  Actors
}));

/**
 * Maps example, which can sometimes be better than Javascript objects
 */
const dict = new Map([
  ['foo', 1],
  ['bar', 2]
]);
console.log(dict.get('foo'));
dict.set('foo', 2);
dict.has('baz'); // check if entry exists given the key
console.log(dict.keys());
