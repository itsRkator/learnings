const containsDuplicates = (arr) => {
  // Approach 1: Using Map
  //   const map = new Map();
  //   for (const elem of arr) {
  //     map.set(JSON.stringify(elem), (map.get(elem) || 0) + 1);
  //   }
  //   const unique = [...map.keys()];

  // Approach 2: Using Set
  const unique = [...new Set(arr.map((elem) => JSON.stringify(elem)))];
  return arr.length !== unique.length;
};

// Test Cases
console.log(containsDuplicates([1, 2, 3, 4, 5])); // Expected output: false (no duplicates)
console.log(containsDuplicates([1, 2, 3, 4, 5, 2])); // Expected output: true (2 is repeated)
console.log(containsDuplicates([7, 7, 7, 7, 7])); // Expected output: true (all elements are duplicates)
console.log(containsDuplicates([42])); // Expected output: false (only one element, no duplicates)
console.log(containsDuplicates([])); // Expected output: false (no elements, no duplicates)
console.log(containsDuplicates([1, '2', 3, '4', 1])); // Expected output: true (1 is repeated)
console.log(containsDuplicates(['apple', 'banana', 'Apple'])); // Expected output: false (case-sensitive, no duplicates)
console.log(containsDuplicates([{ a: 1 }, { b: 2 }, { a: 1 }])); // Expected output: true (objects with the same structure are considered duplicates)
console.log(containsDuplicates([...Array(1000000).keys(), 999999])); // Expected output: true (999999 is repeated at the end)
console.log(containsDuplicates([-1, -2, -3, -1])); // Expected output: true (-1 is repeated)
