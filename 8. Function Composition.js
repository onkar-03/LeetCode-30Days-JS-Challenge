/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function (functions) {
  // Return a new function that takes a single argument 'x'
  return function (x) {
    // Iterate through the functions array from last to first
    for (let i = functions.length - 1; i >= 0; i--) {
      // Call each function with the current value of 'x' and update 'x'
      x = functions[i](x);
    }
    // Return the final value after all functions have been applied
    return x;
  };
};

/**
 * Example usage:
 * const fn = compose([x => x + 1, x => 2 * x
**/
