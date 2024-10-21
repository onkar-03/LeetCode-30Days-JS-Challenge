/**
 * @param {Array} arr
 * @param {number} size 
 * @return {Array}
 */
var chunk = function (arr, size) {
  // Initialize an empty array 'result' which will hold the chunks.
  let result = [];

  // Loop through the input array 'arr'.
  // 'i' increments by 'size' in each iteration, creating chunks of that size.
  for (let i = 0; i < arr.length; i += size) {
    // Use the slice method to extract a portion of the array, starting at index 'i'
    // and ending at 'i + size'. This creates a sub-array (chunk) of the desired size.
    result.push(arr.slice(i, i + size));
  }

  // Return the array of chunks once the loop has processed the entire array.
  return result;
};
