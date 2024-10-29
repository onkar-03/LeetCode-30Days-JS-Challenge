/**
 * @param {number[]} nums
 * @return {void}
 */
// Constructor function to initialize an ArrayWrapper object with a given array of numbers
var ArrayWrapper = function (nums) {
  this.array = nums; // Store the input array in a property called 'array'
};

// Override the valueOf method to control behavior when ArrayWrapper is used in a numerical context
ArrayWrapper.prototype.valueOf = function () {
  // Use reduce to sum up all elements in the array and return the sum
  return this.array.reduce((sum, num) => sum + num, 0);
};

// Override the toString method to control behavior when ArrayWrapper is used in a string context
ArrayWrapper.prototype.toString = function () {
  // Convert the array to a JSON string representation and return it
  return JSON.stringify(this.array);
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
