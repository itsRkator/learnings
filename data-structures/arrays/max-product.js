const maxProduct = (arr) => {
  if (arr.length < 2) throw new Error('Array must have at least two elements.');

  let max = -Infinity;
  let secondMax = -Infinity;
  let min = Infinity;
  let secondMin = Infinity;

  for (let elem of arr) {
    // Update max and secondMax
    if (elem > max) {
      secondMax = max;
      max = elem;
    } else if (elem > secondMax) {
      secondMax = elem;
    }

    // Update min and secondMin
    if (elem < min) {
      secondMin = min;
      min = elem;
    } else if (elem < secondMin) {
      secondMin = elem;
    }
  }

  // Maximum product can be from the two largest or the two smallest (negative) numbers
  return Math.max(max * secondMax, min * secondMin);
};

// Test Cases
console.log(maxProduct([3, 5, 2, 9])); // Output: 45 (9 * 5)
console.log(maxProduct([4, 7])); // Output: 28 (4 * 7)
console.log(maxProduct([3, -5, 2, -9])); // Output: 45 (-5 * -9)
console.log(maxProduct([3, -5, 2, 9])); // Output: 27 (3 * 9)
console.log(maxProduct([-3, -5, 2, -9])); // Output: 45 (-3 * -15)
console.log(maxProduct([0, 0, 0, 0])); // Output: 0 (0 * 0)
console.log(maxProduct([5, 5])); // Output: 25 (5 * 5)
try {
  console.log(maxProduct([5])); // Error: Array must have at least two elements.
} catch (error) {
  console.log(error.message);
}
console.log(maxProduct([1000000000, 500000000, 2000000000])); // Output: 2000000000000000000 (2000000000 * 1000000000)
console.log(maxProduct([3, 3, 3, 3])); // Output: 9 (3 * 3)
console.log(maxProduct([7, 3, 5, -2])); // Output: 21 (7 * 3)
console.log(maxProduct([1, 1000, 0, -5])); // Output: 1000 (1000 * 1)
console.log(maxProduct([3, 2, 2, 5, 5])); // Output: 25 (5 * 5)
console.log(maxProduct([2, -10, -20, 3, 4])); // Output: 200 (10 * 20)
