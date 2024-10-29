class Calculator {
  // Constructor to initialize the calculator with a starting value
  constructor(value) {
    this.result = value; // Store the initial value in the 'result' property
    return this; // Return the instance to allow method chaining
  }

  // Method to add a value to the current result
  add(value) {
    this.result += value; // Update the result by adding the provided value
    return this; // Return the instance to allow method chaining
  }

  // Method to subtract a value from the current result
  subtract(value) {
    this.result -= value; // Update the result by subtracting the provided value
    return this; // Return the instance to allow method chaining
  }

  // Method to multiply the current result by a value
  multiply(value) {
    this.result *= value; // Update the result by multiplying with the provided value
    return this; // Return the instance to allow method chaining
  }

  // Method to divide the current result by a value
  divide(value) {
    // Check for division by zero to prevent errors
    if (value === 0) {
      throw new Error('Division by zero is not allowed'); // Throw an error if value is zero
    }

    this.result /= value; // Update the result by dividing by the provided value
    return this; // Return the instance to allow method chaining
  }

  // Method to raise the current result to the power of a value
  power(value) {
    this.result **= value; // Update the result by raising it to the provided value
    return this; // Return the instance to allow method chaining
  }

  // Method to get the current result
  getResult() {
    return this.result; // Return the stored result
  }
}

// Example usage:
// const calculator = new Calculator(5);
// const result = calculator.add(3).subtract(2).multiply(4).divide(2).getResult(); // result will be 12
