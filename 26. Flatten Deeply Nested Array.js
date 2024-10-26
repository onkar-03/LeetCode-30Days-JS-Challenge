/**
 * Flattens a nested array up to a specified depth.
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  // Base case: if depth is 0, return a shallow copy of the original array
  if (n === 0) {
    return arr.slice(); // Slicing returns a shallow copy of the array
  }

  let flattar = []; // Initialize an empty array to hold the flattened elements

  // Iterate over each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is an array
    if (Array.isArray(arr[i])) {
      // Recursively flatten the nested array, reducing the depth by 1
      const nested = flat(arr[i], n - 1);
      // Spread the elements of the flattened nested array into the flattar array
      flattar.push(...nested);
    } else {
      // If the element is not an array, add it directly to the flattar array
      flattar.push(arr[i]);
    }
  }
  return flattar; // Return the fully flattened array
};
