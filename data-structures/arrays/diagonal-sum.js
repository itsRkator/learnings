const diagonalSum = (matrix) => {
  const m = matrix?.length || 0;
  const n = matrix[0]?.length || 0;
  let sum = 0;

  if (m === n) {
    for (let i = 0; i < n; i++) {
      sum += matrix[i][i];
    }
  } else {
    const min = Math.min(m, n);
    for (let i = 0; i < min; i++) {
      sum += matrix[i][i];
    }
  }
  return sum;
};

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalSum(matrix1)); // Expected output: 1 + 5 + 9 = 15

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
console.log(diagonalSum(matrix2)); // Expected output: 1 + 5 + 9 = 15 (diagonal elements: 1, 5, 9)

const matrix3 = [[10]];
console.log(diagonalSum(matrix3)); // Expected output: 10 (only one element)

const matrix4 = [];
console.log(diagonalSum(matrix4)); // Expected output: 0 (no elements in the matrix)

const matrix5 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(diagonalSum(matrix5)); // Expected output: 1 + 6 = 7 (diagonal elements: 1, 6)

const matrix6 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
console.log(diagonalSum(matrix6)); // Expected output: 1 + 4 = 5 (diagonal elements: 1, 4)

const matrix7 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(diagonalSum(matrix7)); // Expected output: 1 + 7 + 13 + 19 + 25 = 65

const matrix8 = [[1, 2, 3, 4, 5]];
console.log(diagonalSum(matrix8)); // Expected output: 1 (diagonal element: 1)

const matrix9 = [[1], [2], [3], [4], [5]];
console.log(diagonalSum(matrix9)); // Expected output: 1 (diagonal element: 1)
