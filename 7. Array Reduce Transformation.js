/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  // Initialize the accumulator with the 'init' value provided
  let accumulator = init;

  // Get the length of the input array 'nums'
  const n = nums.length;

  // Iterate over the array elements using a for-loop
  for (let i = 0; i < n; i++) {
    // For each element in the array, apply the reducer function 'fn'
    // Update the accumulator with the result of applying 'fn' to the current accumulator and the current array element
    accumulator = fn(accumulator, nums[i]);
  }

  // After the loop completes, return the accumulated result
  return accumulator;
};
