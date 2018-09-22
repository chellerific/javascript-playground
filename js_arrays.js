/* JAVASCRIPT ARRAYS CHEAT SHEET */

//Initialize array
const a = []
const a = [1,2,3]
const a = Array.of(1,2,3)
const a = Array(6).fill(1)

//Iterates a until f() returns false
a.every(f)

//Iterates a until f() returns true
a.some(f)

/* Iterates a and builds a new array with the result of 
executing f() on each a element*/
const b = a.map(f)

/* Iterates a and builds a new array with elements of a that
returned true when executing f() on each a element */
const b = a.filter(f)

