/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// Approach 1: Using Map Method (Functional Programming)
var map = function (arr, fn) {
  return arr.map(fn); // Functional Programming
};

// Approach 2: Using For Loop
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};
