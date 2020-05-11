/* JAVASCRIPT FUNCTIONS */

/**
 * You can make dynamic checks inside parameters.
 */
const checkValue = () => {
  throw new Error('Missing parameter');
};
const foo = (val = checkValue()) => val;
