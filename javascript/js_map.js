/* JAVASCRIPT MAP THEORY AND USECASES */

//Example of getting a specific subset of properties from an object
// where dataset has a lot more properties and we specify which
// properties we only want

const getNewArray = dataset.map(({ Title, Year, Plot, Genre, Actors }) => ({
  Title,
  Year,
  Plot,
  Genre,
  Actors
}));
