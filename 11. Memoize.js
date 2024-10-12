/**
 * @param {Function} fn - The function to be memoized
 * @return {Function} - A new function that remembers the result of previous calls with the same arguments (memoization)
 */
function memoize(fn) {
  // Create an object to store cached results.
  // The keys will be the stringified version of the arguments,and the values will be the results of calling `fn` with those arguments.
  let cache = {};

  // Return a new function that wraps the original `fn`.
  return function (...args) {
    // Convert the arguments into a JSON string to use as a cache key.
    // This ensures that even if arguments are objects or arrays, they are properly compared.
    // Key creation to store the results "[2,2]": 4, and so on
    let n = JSON.stringify(args);

    // Check if the result for these arguments is already in the cache.
    if (n in cache) {
      // If the result is in the cache, return the cached value.
      return cache[n];
    } else {
      // If the result is not cached, call the original function `fn` with the provided arguments.
      let result = fn.apply(this, args);

      // Store the result in the cache so that future calls with the same arguments can return the cached result.
      cache[n] = result;

      // Return the newly computed result.
      return result;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
