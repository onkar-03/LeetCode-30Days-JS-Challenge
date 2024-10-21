/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
// Function to check if an object (or array) is empty.
var isEmpty = function (obj) {
  // Check if the input obj is an array.
  if (Array.isArray(obj)) {
    // If it's an array, return true if its length is 0 (i.e., it's empty), otherwise return false.
    return obj.length === 0;
  } else {
    // If the input is not an array, assume it's an object.
    // Get all the keys of the object using Object.keys() in an array
    let arr = Object.keys(obj);

    // Check the length of the array of keys and return true if the array of keys is empty, otherwise return false.
    return arr.length === 0;
  }
};
