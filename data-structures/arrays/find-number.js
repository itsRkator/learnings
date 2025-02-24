const findNumberInSortedArray = (arr, num) => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (num < arr[mid]) {
      r = mid - 1;
    }
    if (num > arr[mid]) {
      l = mid + 1;
    }
  }
  return -1;
};

const findNumberInUnsortedArray = (arr, num) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

// Sorted array example
const sortedArr1 = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(findNumberInSortedArray(sortedArr1, 7)); // Expected output: 3 (index of 7)
console.log(findNumberInSortedArray(sortedArr1, 15)); // Expected output: 7 (index of 15)
console.log(findNumberInSortedArray(sortedArr1, 1)); // Expected output: 0 (index of 1)
console.log(findNumberInSortedArray(sortedArr1, 8)); // Expected output: -1 (8 is not in the array)
console.log(findNumberInSortedArray(sortedArr1, 13)); // Expected output: 6 (index of 13)

// Unsorted array example
const unsortedArr1 = [7, 5, 3, 9, 1, 15, 13];
console.log(findNumberInUnsortedArray(unsortedArr1, 7)); // Expected output: 0 (index of 7)
console.log(findNumberInUnsortedArray(unsortedArr1, 9)); // Expected output: 3 (index of 9)
console.log(findNumberInUnsortedArray(unsortedArr1, 1)); // Expected output: 4 (index of 1)
console.log(findNumberInUnsortedArray(unsortedArr1, 15)); // Expected output: 5 (index of 15)
console.log(findNumberInUnsortedArray(unsortedArr1, 8)); // Expected output: -1 (8 is not in the array)
