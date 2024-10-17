const TimeLimitedCache = function () {
  // Initialize a Map to store the key-value pairs along with their timeout references
  this.cache = new Map(); // Using Map so we don't need a separate size variable
};

/**
 * Set a key-value pair with a specified duration until expiration
 * @param {number} key - The key for the cache entry
 * @param {number} value - The value to be associated with the key
 * @param {number} duration - The time in milliseconds until the key expires
 * @return {boolean} - Returns true if the key was already in the cache and not expired, otherwise false
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  // Check if the key is already in the cache (i.e., has not expired)
  let found = this.cache.has(key);

  // If the key exists, clear its previous timeout to reset the expiration
  if (found) {
    clearTimeout(this.cache.get(key).ref); // Cancel the previous timeout
  }

  // Set a new entry in the cache with the value and a new timeout reference
  this.cache.set(key, {
    value, // Store the value (ES6 shorthand for `value: value`)
    ref: setTimeout(() => this.cache.delete(key), duration), // Set a timeout to automatically delete the key after the duration
  });

  // Return whether the key was already in the cache (true if found, false otherwise)
  return found;
};

/**
 * Get the value associated with a key
 * @param {number} key - The key to retrieve the value for
 * @return {number} - Returns the value if the key exists and has not expired, otherwise returns -1
 */
TimeLimitedCache.prototype.get = function (key) {
  // If the key exists, return its value, otherwise return -1
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * Get the count of non-expired keys
 * @return {number} - The count of keys that are still valid (i.e., not expired)
 */
TimeLimitedCache.prototype.count = function () {
  // Return the number of entries in the Map (this will only include non-expired keys)
  return this.cache.size;
};

/**
 * Example usage:
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // Sets key 1 with value 42 and a 1000ms expiration. Returns false since the key was not previously in the cache.
 * timeLimitedCache.get(1) // Returns 42, since key 1 exists and has not expired.
 * timeLimitedCache.count() // Returns 1, since there is 1 non-expired key in the cache.
 */
