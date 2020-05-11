/* JAVASCRIPT PROMISES */

/* A promise is like declaring a rule. For example,
 * we can write from this..
 */

setTimeout(function() {
  console.log('I promised to sing after 1s');
  setTimeout(function() {
    console.log('I promised to sing after 2s');
  }, 1000);
}, 1000);

/* ... to this. A reject would send the code to the catch
 * block of the promise chain. This is something to note
 * when creating your own promises.*/

const wait = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });

wait()
  .then(() => {
    console.log('I promised to sing after 1s');
    return wait();
  })
  .then(() => console.log('I promised to sing after 2s'));

// Chaining Promises
/**
 * Before, we chained promises using then.
 */
Promise.resolve(1)
  .then(val => {
    console.log(val);
    return Promise.resolve(2);
  })
  .then(val => {
    console.log(val);
    return Promise.resolve(3);
  })
  .then(val => {
    console.log(val);
  });

/**
 * A cleaner way to do the above is using async and await.
 */
(async () => {
  const val1 = await Promise.resolve(1);
  console.log(val1);
  const val2 = await Promise.resolve(2);
  console.log(val2);
  const val3 = await Promise.resolve(3);
  console.log(val3);
})();

/**
 * We can also loop promises and loop them one after another.
 */
(async () => {
  const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
  for await (let p of promises) {
    const val = await p;
    console.log(val);
  }
})();
