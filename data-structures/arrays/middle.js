const middle = (arr) => {
  const n = arr.length;
  if (n === 0) {
    return [];
  }

  const mid = Math.floor((n - 1) / 2);
  return n % 2 === 0 ? [arr[mid], arr[mid + 1]] : [arr[mid]];
};

console.log(middle([1, 2, 3])); // [2]
console.log(middle([1])); // [1]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // [4, 5]
console.log(middle([2, 3, 4, 5, 6])); // [4]
