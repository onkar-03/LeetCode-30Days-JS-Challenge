/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function (arr1, arr2) {
    // Initialize an empty object to store unique entries based on 'id'
    const result = {};

    // Iterate through each object in the first array (arr1)
    for (let i = 0; i < arr1.length; i++) {
        // Use the 'id' property of each object as the key in the result object
        // This automatically ensures each 'id' is unique in 'result'
        result[arr1[i].id] = arr1[i];
    }

    // Iterate through each object in the second array (arr2)
    for (let i = 0; i < arr2.length; i++) {
        // Check if an object with the same 'id' already exists in 'result'
        if (result[arr2[i].id]) {
            // If the object with the same 'id' exists, update it with properties from arr2[i]
            // Loop through each property in arr2[i]
            for (const key in arr2[i]) {
                // Copy or overwrite each property from arr2[i] to the existing object in result
                result[arr2[i].id][key] = arr2[i][key];
            }
        } else {
            // If the 'id' does not exist in 'result', add the entire object from arr2[i]
            result[arr2[i].id] = arr2[i];
        }
    }

    // Convert the 'result' object back into an array of values and return it
    // Object.values() will return an array containing only the unique objects
    return Object.values(result);
};