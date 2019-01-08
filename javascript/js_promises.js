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
