class Calculator {
  // Constructor to initialize the calculator with a starting value
  constructor(value) {
    // Store the initial value in the 'result' property
    this.result = value;
    // Return the instance to allow method chaining
    return this;
  }

  // Method to add a value to the current result
  add(value) {
    // Update the result by adding the provided value
    this.result += value;
    // Return the instance to allow method chaining
    return this;
  }

  // Method to subtract a value from the current result
  subtract(value) {
    // Update the result by subtracting the provided value
    this.result -= value;
    // Return the instance to allow method chaining
    return this;
  }

  // Method to multiply the current result by a value
  multiply(value) {
    // Update the result by multiplying with the provided value
    this.result *= value;
    // Return the instance to allow method chaining
    return this;
  }

  // Method to divide the current result by a value
  divide(value) {
    // Check for division by zero to prevent errors
    if (value === 0) {
      throw new Error('Division by zero is not allowed'); // Throw an error if value is zero
    }

    // Update the result by dividing by the provided value
    this.result /= value;
    // Return the instance to allow method chaining
    return this;
  }

  // Method to raise the current result to the power of a value
  power(value) {
    // Update the result by raising it to the provided value
    this.result **= value;

    // Return the instance to allow method chaining
    return this;
  }

  // Method to get the current result
  getResult() {
    return this.result; // Return the stored result
  }
}

// Example usage:
// const calculator = new Calculator(5);
// const result = calculator.add(3).subtract(2).multiply(4).divide(2).getResult(); // result will be 12
