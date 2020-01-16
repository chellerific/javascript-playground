/**
 * SHORCUTS IN JAVASCRIPTS
 */

/**
 * Immediately converting variables to booleans
 */
function Account(cash) {
  this.cash = cash;
  this.hasMoney = !!cash;
}

var account = new Account(100.5);
console.log(account.cash); // 100.50
console.log(account.hasMoney); // true

var emptyAccount = new Account(0);
console.log(emptyAccount.cash); // 0
console.log(emptyAccount.hasMoney); // false

/**
 * Immediately convert to number
 */

function toNumber(strNumber) {
  return +strNumber;
}

/**
 * Immediately set default values
 */
function User(name, age) {
  this.name = name || 'Oliver Queen';
  this.age = age || 27;
}
var user1 = new User();
console.log(user1.name); // Oliver Queen
console.log(user1.age); // 27
var user2 = new User('Barry Allen', 25);
console.log(user2.name); // Barry Allen
console.log(user2.age); // 25

/**
 * Getting the last items
 */
var array = [1, 2, 3, 4, 5, 6];
console.log(array.slice(-1)); // [6]
console.log(array.slice(-2)); // [5,6]
console.log(array.slice(-3)); // [4,5,6]
