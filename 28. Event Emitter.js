class EventEmitter {
  constructor() {
    this.events = {}; // Store all events
  }

  // Subscribe to an event with a callback
  subscribe(event, callback) {
    // If the event doesn't exist, create an empty array for it
    if (!this.events[event]) {
      this.events[event] = [];
    }

    // Push the callback to the event's array
    this.events[event].push(callback);

    // Return an unsubscribe function
    return {
      unsubscribe: () => {
        // Remove the callback from the event's array
        this.events[event] = this.events[event].filter((cb) => cb !== callback);
        // If the array is empty, delete the event
        if (this.events[event].length === 0) {
          delete this.events[event];
        }
      },
    };
  }

  // Emit an event and call all its subscribed callbacks
  emit(event, args = []) {
    // If there are no subscribers for the event, return an empty array
    if (!this.events[event]) {
      return [];
    }

    // Call each callback with the provided arguments and collect the results
    return this.events[event].map((callback) => callback(...args));
  }
}

/**
 * Example usage:
 * const emitter = new EventEmitter();
 *
 * Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99; }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * console.log(emitter.emit('onClick')); // [99]
 * sub.unsubscribe(); // undefined
 * console.log(emitter.emit('onClick')); // []
 */
