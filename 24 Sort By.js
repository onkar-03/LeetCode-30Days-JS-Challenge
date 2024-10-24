/**
 * @param {Array} arr
 * @param {Function} fn 
 * @return {Array}
 */

var sortBy = function (arr, fn) {
    // The built-in sort method is used to sort the array.
    // It takes a comparison function which determines the order of the elements.
    return arr.sort((a, b) =>
        // Apply the provided function `fn` to both elements `a` and `b`. and Sort as per the output from teh fn() function
        fn(a) - fn(b)
    );
};
