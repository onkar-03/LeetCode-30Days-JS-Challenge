/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function (obj) {
  // Base case: If the input is null, return it as is.
  if (obj === null) {
    return obj;
  }

  // If the input is not an object (i.e., primitive values), return it directly.
  if (typeof obj !== 'object') {
    return obj;
  }

  // If the input is an array, filter out falsy values and recursively compact each element.
  if (Array.isArray(obj)) {
    // Filter removes all falsy values (like null, 0, false, "", NaN).
    // For each remaining truthy value, call compactObject recursively to ensure nested structures are also compacted.
    return obj.filter(Boolean).map(compactObject);
  }

  // Initialize an empty object to hold the compacted result.
  let compactedObj = {};

  // Iterate over each key in the object.
  for (const key in obj) {
    // Recursively compact the value associated with the current key.
    let value = compactObject(obj[key]);

    // If the compacted value is truthy (not null, undefined, or falsy), add it to the compacted object.
    if (value) {
      compactedObj[key] = value;
    }
  }

  // Return the newly created compacted object.
  return compactedObj;
};
