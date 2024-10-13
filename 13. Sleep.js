/**
 * @param {number} millis
 * @return {Promise}
 */

async function sleep(millis) {
  // Return a Promise that will resolve after 'millis' milliseconds.
  // In this case, we only need 'resolve' because we are simulating a delay, not handling any errors.
  return new Promise((resolve) => {
    // Use 'setTimeout' to set up a timer.
    // 'setTimeout' takes a callback function (in this case, 'resolve') and a delay (in milliseconds) as parameters.
    // After 'millis' milliseconds, the 'resolve' function will be called, which means the Promise will be fulfilled.
    setTimeout(resolve, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
