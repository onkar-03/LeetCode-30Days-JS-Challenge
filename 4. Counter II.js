/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init; // Create a variable to track the current value

  return {
    // Increment function: Increase currentValue by 1 and return it
    increment: () => {
      return ++currentValue;
    },
    // Decrement function: Decrease currentValue by 1 and return it
    decrement: () => {
      return --currentValue;
    },
    // Reset function: Set currentValue back to the initial value (init) and return it
    reset: () => {
      currentValue = init;
      return currentValue;
    },
  };
};

/**
 * Example usage:
 * const counter = createCounter(5)
 * console.log(counter.increment()); // 6
 * console.log(counter.reset());     // 5
 * console.log(counter.decrement()); // 4
 */
