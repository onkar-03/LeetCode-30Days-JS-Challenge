/**
 * @param {Function} fn
 * @return {Object}
 */

// The 'groupBy' function is added to the Array prototype, so it can be used by any array.
// It takes a function 'fn' as an argument, which will be used to determine the grouping key for each element in the array.
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, curr) => {
    // 'this' refers to the array on which 'groupBy' is called.
    // We are using the 'reduce' method to accumulate the result in an object (acc).
    // 'acc' is the accumulator (initially an empty object), and 'curr' is the current element in the array during iteration.
    // The 'fn' function is called with the current array element 'curr', and its result is stored in 'key'. This 'key' will be used as the property (or key) in the accumulator object (acc).
    const key = fn(curr);

    // If the key does not already exist in the accumulator object 'acc',
    // we create a new empty array for that key to store elements that belong to this group.
    // We push the current element 'curr' into the array that corresponds to the key in 'acc'.
    if (!acc[key]) {
      acc[key] = [];
    }

    // After processing the current element, we return the updated accumulator object (acc) to be used in the next iteration.
    acc[key].push(curr);

    return acc;
  }, {});
  // The second argument to 'reduce' is an empty object '{}', which serves as the initial value of 'acc'.
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
