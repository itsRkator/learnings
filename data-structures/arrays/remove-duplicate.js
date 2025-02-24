const removeDuplicate = (arr) => {
  // Approach 1: space and time: O(n) -> O(n) + O(m); m < n
  // const map = new Map();
  // for (const elem of arr) {
  //   map.set(elem, (map.get(elem) || 0) + 1);
  // }
  // return [...map.keys()];

  return [...new Set(arr)];
};

// Test cases
const testCases = [
  { input: [1, 1, 2, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { input: [7, 7, 7, 7, 7], expected: [7] },
  { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { input: [5, 5, 5, 4, 4, 4, 3, 3], expected: [5, 4, 3] },
  { input: [], expected: [] },
  {
    input: ['apple', 'banana', 'apple', 'orange', 'banana'],
    expected: ['apple', 'banana', 'orange'],
  },
  { input: [100, 200, 300, 100, 200, 400], expected: [100, 200, 300, 400] },
  { input: [1, 1, 1, 1, 1, 1], expected: [1] },
  { input: [3, 3, 2, 2, 5, 5, 4, 4], expected: [3, 2, 5, 4] },
  { input: [0, -1, -2, -2, 0], expected: [0, -1, -2] },
];

// Running the test cases
testCases.forEach(({ input, expected }, index) => {
  const result = removeDuplicate(input);
  console.log(
    `Test case ${index + 1}: ${
      JSON.stringify(result) === JSON.stringify(expected) ? 'Passed' : 'Failed'
    }`
  );
  console.log(
    `Input: ${JSON.stringify(input)}\nExpected: ${JSON.stringify(
      expected
    )}\nResult: ${JSON.stringify(result)}\n`
  );
});
