const findMissingNumber = (arr, n) => {
  const arraySum = arr.reduce((prev, curr) => curr + prev, 0);
  const actualSum = (n * (n + 1)) / 2;

  return actualSum - arraySum;
};

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13], 13));
