const factorial = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    return 'Number must be a positive integer.';
  }

  return n === 0 || n === 1 ? 1 : n * factorial(n - 1); // Recursion for other numbers
};

// Test Cases for Factorial Function
// const testCases = [
//   // ✅ Edge Cases
//   {
//     input: 0,
//     expected: 1,
//     description: 'Factorial of 0 (0! = 1) is a special case.',
//   },
//   { input: 1, expected: 1, description: 'Factorial of 1 (1! = 1), base case.' },

//   // ✅ Normal Cases
//   { input: 2, expected: 2, description: 'Factorial of 2 (2! = 2 × 1 = 2).' },
//   {
//     input: 3,
//     expected: 6,
//     description: 'Factorial of 3 (3! = 3 × 2 × 1 = 6).',
//   },
//   {
//     input: 4,
//     expected: 24,
//     description: 'Factorial of 4 (4! = 4 × 3 × 2 × 1 = 24).',
//   },
//   {
//     input: 5,
//     expected: 120,
//     description: 'Factorial of 5 (5! = 5 × 4 × 3 × 2 × 1 = 120).',
//   },
//   {
//     input: 6,
//     expected: 720,
//     description: 'Factorial of 6 (6! = 6 × 5 × 4 × 3 × 2 × 1 = 720).',
//   },
//   {
//     input: 10,
//     expected: 3628800,
//     description: 'Factorial of 10 (10! = 3,628,800), larger case.',
//   },

//   // ❌ Invalid Cases (Error Handling)
//   {
//     input: -1,
//     expected: 'Number must be a positive integer.',
//     description: 'Negative numbers are invalid for factorial.',
//   },
//   {
//     input: 1.5,
//     expected: 'Number must be a positive integer.',
//     description: 'Factorial is only defined for whole numbers.',
//   },
//   {
//     input: 'a',
//     expected: 'Number must be a positive integer.',
//     description: 'Non-numeric string input should return an error.',
//   },
//   {
//     input: null,
//     expected: 'Number must be a positive integer.',
//     description: 'Null input should return an error.',
//   },
//   {
//     input: undefined,
//     expected: 'Number must be a positive integer.',
//     description: 'Undefined input should return an error.',
//   },
//   {
//     input: [],
//     expected: 'Number must be a positive integer.',
//     description: 'Array input should return an error.',
//   },
//   {
//     input: {},
//     expected: 'Number must be a positive integer.',
//     description: 'Object input should return an error.',
//   },
// ];

// Run Test Cases
// console.log('Running Factorial Tests...');
// testCases.forEach(({ input, expected, description }, index) => {
//   const result = factorial(input);
//   console.log(
//     `Test ${
//       index + 1
//     }: ${description}\n  Input: ${input}\n  Expected Output: ${expected}\n  Actual Output: ${result}\n  Status: ${
//       expected === result ? '✅ Passed' : '❌ Failed'
//     }\n`
//   );
// });
