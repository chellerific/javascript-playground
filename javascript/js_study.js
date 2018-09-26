/* JAVASCRIPT FUNDAMENTALS GUIDE */

const doSomething = ({ foo = 2, bar = "HI" }) => {
  console.log(foo);
  console.log(bar);
};

const args = { foo: 3, bar: "HOOO" };
doSomething(args);

var testStr = "A \
                Rat is a Rat";

var result = `the result is ${args.bar}`;
console.log(result);

//object creation expressions
new object();
new a(1);
new myStuff("name", 2, { a: 4 });

//function definition expressions
const func1 = (a, b) => a * b;
const func2 = a => a * 2;
const func3 = () => {
  return 2;
};

console.log("Func1: " + func1(3, 2));
console.log("Func2: " + func2(2));
console.log("Func3: " + func3());

//Array example
const funcArr = () => {
  return ["Chelsi", 23];
};

const [name, age] = funcArr();

//Object example
const funcObj = () => {
  return { name: "Chelsi", age: 23 };
};

//object methods
//Arrow funtions are not suitable to be used with object methods
const keyblade = {
  brand: "FFVII",
  model: "Fenrir",
  attack: function() {
    console.log(`Roxas attacked`);
  }
};

keyblade.attack();

const { name, age } = funcObj();

//IIFE, Immediately Invocated Function Expressions
(function execute() {
  console.log("executed");
});

//or

const executing = (function execute2() {
  return "something";
})();

/* 'this' works differently between a function and an arrow. An
arrow function will look up this from the call stack instead of the
scope it's inside in */

//THIS WILL NOT WORK
const link = document.querySelector("#link");
link.addEventListener("click", () => {
  //this === window
});

//THIS WILL WORK
const link = document.querySelector("#link");
link.addEventListener("click", function() {
  //this === link
});

/* Closures examples */
const attack = kh => {
  const doIt = `${kh} released!`;
  (() => console.log(doIt))();
};

attack("KH3");

//or

const prepAttack = kh => {
  const doIt = `${kh} released!`;
  return () => console.log(doIt);
};

const attack = prepAttack(`KH3`);

attack();

//or
const prepAttack = kh => {
  const doIt = `${kh} released!`;
  return () => {
    console.log(doIt);
  };
};

const kh3Attack = prepAttack(`KH3`);
const ffxviAttack = prepAttack(`FFXVI`);

kh3Attack();
ffxviAttack();
