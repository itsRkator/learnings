// Recursive Approach: Plain Recursion Low Performance
// const fibonacciNumber = (num) => {
//   if (!Number.isInteger(num) || num < 0) {
//     return 'Number must be a positive integer.';
//   }
//   if (num === 0 || num === 1) {
//     return num;
//   }
//   return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
// };

// Recursive Approach: Using Memoization with Map for Best Performance
const fibonacciNumberMemoization = (num, memo = new Map()) => {
  if (!Number.isInteger(num) || num < 0) {
    return 'Number must be a positive integer.';
  }

  if (num === 0 || num === 1) {
    return num;
  }

  if (memo.has(num)) {
    return memo.get(num);
  }

  memo.set(
    num,
    fibonacciNumberMemoization(num - 1, memo) +
      fibonacciNumberMemoization(num - 2, memo)
  );
  return memo.get(num);
};

// Iterative Approach: A more efficient approach avoids recursion altogether by iterating through Fibonacci numbers.
// const fibonacciNumberIterative = (num) => {
//   if (!Number.isInteger(num) || num < 0) {
//     return 'Number must be a positive integer.';
//   }
//   if (num === 0 || num === 1) {
//     return num;
//   }
//   let prev = 0,
//     curr = 1;
//   for (let i = 2; i <= num; i++) {
//     [prev, curr] = [curr, prev + curr];
//   }
//   return curr;
// };

// Run Test Cases
// console.log('Running Fibonacci Tests...');
// const testCases = [
//   // ✅ Base Cases (Edge Cases)
//   {
//     input: 0,
//     expected: 0,
//     description: 'Base case: fibonacci(0) should return 0',
//   },
//   {
//     input: 1,
//     expected: 1,
//     description: 'Base case: fibonacci(1) should return 1',
//   },

//   // ✅ Small Numbers
//   { input: 2, expected: 1, description: 'fibonacci(2) should return 1' },
//   { input: 3, expected: 2, description: 'fibonacci(3) should return 2' },
//   { input: 4, expected: 3, description: 'fibonacci(4) should return 3' },
//   { input: 5, expected: 5, description: 'fibonacci(5) should return 5' },
//   { input: 6, expected: 8, description: 'fibonacci(6) should return 8' },

//   // ✅ Large Numbers (Performance Testing)
//   {
//     input: 20,
//     expected: 6765,
//     description: 'fibonacci(20) should return 6765',
//   },
//   {
//     input: 30,
//     expected: 832040,
//     description: 'fibonacci(30) should return 832040',
//   },
//   {
//     input: 50,
//     expected: 12586269025,
//     description: 'fibonacci(50) should return 12586269025',
//   },

//   // ✅ Very Large Numbers (Ensuring No Stack Overflow)
//   {
//     input: 70,
//     expected: 190392490709135,
//     description: 'fibonacci(70) should return 190392490709135',
//   },
//   // {
//   //   input: 100,
//   //   expected: 354224848179261915075,
//   //   description: 'fibonacci(100) should return 354224848179261915075',
//   // },

//   // ✅ Edge Cases (Invalid Inputs)
//   {
//     input: -1,
//     expected: 'Number must be a positive integer.',
//     description: 'Negative input: fibonacci(-1) should return an error message',
//   },
//   {
//     input: -10,
//     expected: 'Number must be a positive integer.',
//     description:
//       'Negative input: fibonacci(-10) should return an error message',
//   },

//   // ✅ Non-Integer Inputs (Edge Cases)
//   {
//     input: 3.5,
//     expected: 'Number must be a positive integer.',
//     description: 'Decimal input: fibonacci(3.5) should return an error message',
//   },
//   {
//     input: '10',
//     expected: 'Number must be a positive integer.',
//     description: "String input: fibonacci('10') should return an error message",
//   },
//   {
//     input: null,
//     expected: 'Number must be a positive integer.',
//     description: 'Null input: fibonacci(null) should return an error message',
//   },
//   {
//     input: undefined,
//     expected: 'Number must be a positive integer.',
//     description:
//       'Undefined input: fibonacci(undefined) should return an error message',
//   },
//   {
//     input: [],
//     expected: 'Number must be a positive integer.',
//     description: 'Array input: fibonacci([]) should return an error message',
//   },
//   {
//     input: {},
//     expected: 'Number must be a positive integer.',
//     description: 'Object input: fibonacci({}) should return an error message',
//   },
// ];
// testCases.forEach(({ input, expected, description }, index) => {
//   const result = fibonacciNumberMemoization(input);
//   const passed = result === expected;
//   console.log(
//     `Test ${
//       index + 1
//     }: ${description}\n  Input: ${input}\n  Expected Output: ${expected}\n  Actual Output: ${result}\n  Status: ${
//       passed ? '✅ Passed' : '❌ Failed'
//     }\n`
//   );
// });
