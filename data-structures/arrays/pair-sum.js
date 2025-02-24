const pairSum = (arr, target) => {
  const pairs = [];
  const pairIndexes = [];
  const seen = new Map(); // This will map values to their indices to avoid duplicates

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const complementary = target - currentValue;

    // Check if the complementary value has already been seen
    if (seen.has(complementary)) {
      const complementaryIndex = seen.get(complementary);

      // Handle the case where a number could form a pair with itself (e.g., 2 + 2 = 4)
      //   if (currentValue === complementary || complementaryIndex === i) {
      //     continue; // Skip if it's the same element pairing with itself
      //   }

      pairs.push([currentValue, complementary]);
      pairIndexes.push([complementaryIndex, i]);
    }

    // Store the current value in the map with its index
    seen.set(currentValue, i);
  }

  return { pairs, pairIndexes };
};

console.log(pairSum([1, 2, 3, 4, 5, 6], 5)); // Expected output: pairs for 5
console.log(pairSum([2, 3, 5, 6, 7, 1], 7)); // Expected output: pairs for 7
console.log(pairSum([1, 2, 3, 4, 5, 6, 5], 10)); // Expected output: pairs for 10
