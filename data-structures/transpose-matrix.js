const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// In-place transpose of a square matrix (without creating a new matrix)
const transposeInPlace = (matrix) => {
  // Loop through each row of the matrix
  for (let i = 0; i < matrix.length; i++) {
    // Loop through columns starting from the diagonal element
    for (let j = i; j < matrix[i].length; j++) {
      // Swap the elements at position (i, j) and (j, i)
      const temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  // No return, as the transpose is done in place
};

// Example of in-place transpose
transposeInPlace(matrix);
console.log(matrix); // Output the matrix after in-place transpose

// Transpose a matrix by creating a new matrix with transposed dimensions
const transpose = (matrix) => {
  // Create a new empty array `t` with the transposed dimensions.
  // The number of rows in the transposed matrix is the number of columns of the original.
  // The number of columns in the transposed matrix is the number of rows of the original.
  const t = new Array(matrix[0].length)
    .fill() // Fill the array with undefined values to prepare for sub-arrays
    .map(() => new Array(matrix.length)); // Create sub-arrays (columns) for each row

  // Loop through the original matrix to copy elements into their new positions in the transposed matrix.
  for (let i = 0; i < matrix.length; i++) {
    // Iterate over rows of the original matrix
    for (let j = 0; j < matrix[i].length; j++) {
      // Iterate over columns of the original matrix
      // Assign the value from the original matrix at [i][j] to the transposed matrix at [j][i]
      t[j][i] = matrix[i][j];
    }
  }

  // Return the newly created transposed matrix
  return t;
};

// Example of transpose using a new matrix
console.log(transpose(matrix)); // Output the transposed matrix
