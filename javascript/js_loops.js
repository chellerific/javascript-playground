/* JAVASCRIPT LOOPS CHEAT SHEET */

/*Normal syntax: for, do...while, while*/

//forEach
const list = ["a", "b", "c"];
list.forEach((item, index) => {
  console.log(item);
  console.log(index);
});

//or

list.forEach(item => console.log(item));

//Interrupting a while loop using break
do {
  if (something) break;
} while (true);

//Jump to the next iteration using continue (research)
do {
  if (something) continue;
} while (true);

/*for...in iterates all the enumerable properties of an object, giving 
the property names (research) */
for (let property in object) {
  console.log(property); //property name
  console.log(object[property]); //property value
}

/*for...of combines the conciseness of forEach with the ability to break 
    the const is indication that the loop creates a new scope in every
    iteration*/
//Iterate over the property value
for (const value of ["a", "b", "c"]) {
  console.log(value);
}

//Get the index as well, using `entries()`
for (const [index, value] of ["a", "b", "c"].entries()) {
  console.log(value);
  console.log(index);
}
