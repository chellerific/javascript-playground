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

/* reduce() executes a callback function on all items of the
array and allows to progressively compute a result. If
initialValue is specified, accumulator in the first iteration
will equal to that value */
;[1,2,3,4].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator * currentValue
}, 1)

/*
iteration 1: 1 * 1 => return 1
iteration 1: 1 * 2 => return 2
iteration 1: 2 * 3 => return 6
iteration 1: 6 * 4 => return 24

return value is 24
*/

//forEach
a.forEach(v => {
    console.log(v)
})

//for..of
for (let v of a) {
    console.log
}

//.entries() returns an iterator of key/value pairs
let it = a.entries()

//Add at the end
a.push(4)

//Add at the beginning
a.unshift(0)
a.unshift(-2,-1)

//Remove from the end
a.pop()

//Remove from the beginning
a.shift()

//Get the first 2 items
a.splice(0,2)

//Get the 2 items from index 3
a.splice(3,2)

/* Removes 3 items starting from index 2 and adds 2 items
while still starting from index 2 */
a.splice(2, 3, 2, 'k', 'h')

//Join multiple arrays
const a = [1,2]
const b = [3,4]

a.concat(b)

//Index of first & last matching item found, -1 if not found
a.indexOf() //first
a.lastIndexOf() //last

//Returns the first item that returns true otherwise undefined
a.find((element, index, array) => {
    //return true or false
    //For index use findIndex
})

//Return the first element in the array that has id === my_id
a.find(x => x.id === my_id)

//Returns true if a contains value after the position i
a.includes(value, i)

//Sort with a custom compare function
const b =[1, 3,2,11]
a.sort((a,b) => a-b) //ascending