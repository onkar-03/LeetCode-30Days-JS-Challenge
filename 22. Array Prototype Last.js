/**
 * Adds a method 'last' to the Array prototype.
 * This method retrieves the last element of an array.
 * @return {null|boolean|number|string|Array|Object}
 */

// 'this is' used to refer to the array passed using the .last() Method
Array.prototype.last = function () {
  // Check if the array length is zero (i.e., the array is empty)
  if (this.length === 0) {
    return -1; // Return -1 if the array is empty
  } else {
    // Return the last element of the array using 'this' context
    return this[this.length - 1]; // Access the last element by index
  }
};

/**
 * Example usage:
 * Create an array with elements 1, 2, and 3.
 * Call the 'last' method to retrieve the last element.
 */
const arr = [1, 2, 3]; // Define an array with three elements
arr.last(); // Returns 3, which is the last element of the array
