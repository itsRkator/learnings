const sumOfDigits = (num) => {
  if (!Number.isInteger(num) || num < 0) {
    return 'Number must be a positive integer.';
  }

  return num === 0 ? num : (num % 10) + sumOfDigits(Math.floor(num / 10));
};

// Test Cases
// console.log(sumOfDigits(0)); // Edge case: Zero -> Expected: 0
// console.log(sumOfDigits(5)); // Single-digit number -> Expected: 5
// console.log(sumOfDigits(123)); // Normal case -> Expected: 6 (1+2+3)
// console.log(sumOfDigits(98765)); // Larger number -> Expected: 35 (9+8+7+6+5)
// console.log(sumOfDigits(1001)); // Number with zeros -> Expected: 2 (1+0+0+1)
// console.log(sumOfDigits(999999999)); // Large number -> Expected: 81 (9 repeated)
// console.log(sumOfDigits(-123)); // Negative number -> Expected: 'Number must be a positive integer.'
// console.log(sumOfDigits(3.14)); // Non-integer (float) -> Expected: 'Number must be a positive integer.'
// console.log(sumOfDigits('1234')); // String input -> Expected: 'Number must be a positive integer.'
// console.log(sumOfDigits(null)); // Null input -> Expected: 'Number must be a positive integer.'
// console.log(sumOfDigits(undefined)); // Undefined input -> Expected: 'Number must be a positive integer.'
// console.log(sumOfDigits(NaN)); // NaN input -> Expected: 'Number must be a positive integer.'
// console.log(sumOfDigits(Infinity)); // Infinity input -> Expected: 'Number must be a positive integer.'
