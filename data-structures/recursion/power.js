const power = (base, exponent) => {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('Both base and exponent must be numbers.');
  }

  if (!Number.isInteger(exponent)) {
    throw new Error('Exponent must be an integer.');
  }

  if (exponent < 0) {
    if (base === 0) {
      throw new Error('0 raised to a negative exponent is undefined.');
    }
    return 1 / power(base, -exponent);
  }

  if (exponent === 0) return 1;

  if (exponent % 2 === 0) {
    const halfPower = power(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    return base * power(base, exponent - 1);
  }
};

// Test Cases
// const testCases = [
//   { input: [2, 3], expected: 8, description: 'Normal case' },
//   { input: [5, 0], expected: 1, description: 'Exponent is 0' },
//   { input: [2, 1], expected: 2, description: 'Exponent is 1' },
//   { input: [2, -3], expected: 1 / 8, description: 'Negative exponent' },
//   { input: [-2, 3], expected: -8, description: 'Negative base, odd exponent' },
//   { input: [-2, 4], expected: 16, description: 'Negative base, even exponent' },
//   { input: [0, 5], expected: 0, description: 'Zero base, positive exponent' },
//   { input: [2, 10], expected: 1024, description: 'Large exponent' },
//   { input: [1, 1000], expected: 1, description: 'Base 1 with large exponent' },
//   {
//     input: [10, -2],
//     expected: 0.01,
//     description: 'Negative exponent with decimal result',
//   },
// ];

// Running Test Cases
// testCases.forEach(({ input, expected, description }, index) => {
//   const result = power(...input);
//   const passed = result === expected;
//   console.log(
//     `Test ${
//       index + 1
//     }: ${description}\n  Input: ${input}\n  Expected Output: ${expected}\n  Actual Output: ${result}\n  Status: ${
//       passed ? '✅ Passed' : '❌ Failed'
//     }\n`
//   );
// });

// Edge Cases
// const edgeCases = [
//   {
//     input: [0, -1],
//     error: '0 raised to a negative exponent is undefined.',
//     description: '0^-1 is undefined',
//   },
//   {
//     input: ['2', 3],
//     error: 'Both base and exponent must be numbers.',
//     description: 'Invalid type for base',
//   },
//   {
//     input: [2, '3'],
//     error: 'Both base and exponent must be numbers.',
//     description: 'Invalid type for exponent',
//   },
//   {
//     input: [2, 2.5],
//     error: 'Exponent must be an integer.',
//     description: 'Non-integer exponent',
//   },
// ];

// Running Edge Cases
// edgeCases.forEach(({ input, error, description }, index) => {
//   try {
//     power(...input);
//     console.log(
//       `Test ${
//         testCases.length + index + 1
//       }: ${description}\n  Input: ${input}\n  Expected Error: ${error}\n  Actual Output: No error thrown\n  Status: ❌ Failed\n`
//     );
//   } catch (e) {
//     const passed = e.message === error;
//     console.log(
//       `Test ${
//         testCases.length + index + 1
//       }: ${description}\n  Input: ${input}\n  Expected Error: ${error}\n  Actual Error: ${
//         e.message
//       }\n  Status: ${passed ? '✅ Passed' : '❌ Failed'}\n`
//     );
//   }
// });
