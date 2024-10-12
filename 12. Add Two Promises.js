/**
 * Function to add the resolved values of two promises.
 *
 * @param {Promise} promise1 - The first promise to resolve.
 * @param {Promise} promise2 - The second promise to resolve.
 * @return {Promise} - A promise that resolves to the sum of the resolved values of the two input promises.
 */
var addTwoPromises = async function (promise1, promise2) {
  // Use 'await' to pause the execution until promise1 is resolved.
  // The resolved value of promise1 will be stored in val1.
  const val1 = await promise1;

  // Use 'await' to pause the execution until promise2 is resolved.
  // The resolved value of promise2 will be stored in val2.
  const val2 = await promise2;

  // Return the sum of the resolved values from the two promises.
  return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
