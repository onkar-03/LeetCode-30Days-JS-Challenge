/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // Initialize an array to store the resolved values of each function (same length as functions)
    let res = Array(functions.length);

    // Initialize a counter to keep track of how many promises are still pending
    let waitingFor = functions.length;

    // Loop through each function in the array
    for (let i = 0; i < functions.length; i++) {
      // Call the i-th function to get a promise and handle its resolution
      functions[i]()
        .then((result) => {
          // Store the resolved result in the `res` array at the corresponding index
          res[i] = result;

          // Decrease the counter since one promise has resolved
          waitingFor--;

          // If all promises have resolved (waitingFor reaches 0), resolve the outer promise with the results array
          if (waitingFor === 0) resolve(res);
        })
        .catch(reject); // If any promise rejects, immediately reject the entire `promiseAll` promise
    }
  });
};
