/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

var debounce = function (fn, t) {
  // `timer` holds the ID of the currently active timeout, allowing us to
  // clear it if the debounced function is called again before the timeout completes.
  let timer;

  return function (...args) {
    // Clear the existing timeout, if any. This ensures that if the debounced function
    // is called again before `t` milliseconds have passed, the previous timeout is canceled
    // and replaced with a new one.
    clearTimeout(timer);

    // Set a new timeout that will call `fn` with the provided arguments after `t` milliseconds.
    // If the debounced function is called again within the `t` milliseconds, this timeout
    // will be cleared and restarted.
    timer = setTimeout(() => fn(...args), t);
  };
};
