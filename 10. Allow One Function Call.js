/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let called = false; // Flag to check if the function has been called already.
    return function (...args) {
        if (!called) {
            called = true; // Mark the function as called.
            return fn(...args); // Call the function and return its result.
        }
        return undefined; // Return undefined on subsequent calls.
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
