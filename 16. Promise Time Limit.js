/**
 * @param {Function} fn - The function that returns a promise, which you want to limit by time.
 * @param {number} t - The time limit in milliseconds.
 * @return {Function} - Returns a new function that adds a time limit to the original function.
 */

var timeLimit = function (fn, t) {
  // The returned function is asynchronous and will accept any number of arguments (using the rest parameter syntax: `...args`)
  return async function (...args) {
    // Return a new Promise to handle both the time limit and the execution of the `fn` function
    return new Promise((resolve, reject) => {
      // Set a timeout for the time limit `t`
      setTimeout(() => {
        // If this timeout is reached, reject the promise with the error message "Time Limit Exceeded"
        reject('Time Limit Exceeded');
      }, t);

      // Call the original function `fn` with the provided arguments `...args`
      // `fn(...args)` is expected to return a promise.
      // If the promise resolves within the time limit, resolve the outer promise
      fn(...args)
        .then(resolve)
        .catch(reject); // Handle success (resolve) or failure (reject) from `fn`
    });
  };
};
