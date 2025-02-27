const transpose = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      const temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};

const rotateMatrixBy90DegreeClockWise = (matrix) => {
  transpose(matrix); // Time Complexity: O(n^2), Space: O(n^2)

  for (const row of matrix) {
    row.reverse();
  }

  return matrix;
};

console.log(
  rotateMatrixBy90DegreeClockWise([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
