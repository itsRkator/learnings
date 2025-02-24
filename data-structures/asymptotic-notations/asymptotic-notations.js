// Constant O(1): An algorithm has constant time complexity O(1) when the execution time does not depend on the size of the input.
// Regardless of how large the input is, the algorithm will always take the same amount of time to execute.
const printNumber = (n) => {
  console.log(n); // Takes constant time to print a number
};

// Example:
square(5); // Output: 5
square(10); // Output: 10

// Linear O(n): An algorithm has linear time complexity if the execution time grows linearly with the size of the input.
// If you have a loop that runs n times, then it’s considered linear.
const numberInRange = (n) => {
  // Efficient array creation using Array.from
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  console.log(arr.join(', '));
};

// Example:
numberInRange(5); // Output: 0, 1, 2, 3, 4, 5
numberInRange(3); // Output: 0, 1, 2, 3

// Exponential O(n^x): An algorithm has exponential time complexity when the execution time grows exponentially with the size of the input.
// This happens when you have nested loops, each running n times. The total number of operations for a quadratic time is n * n = n².
// Quadratic -> O(n^2)
// Cubic -> O(n^3)
const printArray = (n) => {
  // O(n^2)
  let output = [];
  // Nested loops to print all pairs of indices
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      output.push(`${i}, ${j}`);
    }
  }
  // Output all pairs at once to optimize console.log
  console.log(output.join('\n')); // Print all pairs in one go
};

// Example:
printArray(2);
printArray(3); // Output (all pairs from the 3x3 grid):

// Logarithmic O(log n): An algorithm has O(log n) time complexity when the size of the problem is
// reduced by a constant factor (usually by half) at each step. This typically happens in algorithms like binary search,
// where the input size is repeatedly halved.
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      low = mid + 1; // Search in the right half
    } else {
      high = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
};

// Example:
let arr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(arr, 7)); // Output: 3 (index of 7)
console.log(binarySearch(arr, 10)); // Output: -1 (not found)

// Space Complexity:
// The amount of memory or space an algorithm requires to execute, relative to the size of the input.
// It accounts for both the space used by the input itself and any extra space needed for variables, data structures, or function calls.
const sumArray = (arr) => {
  let sum = 0; // Constant space for 'sum' variable
  for (const num of arr) {
    sum += num; // Each element of the array is accessed
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));

const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5)); // Output: 120

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5)); // Output: 5
