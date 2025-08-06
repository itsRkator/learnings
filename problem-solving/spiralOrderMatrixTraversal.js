const traverseMatrixSpiralOrder = (matrix, n) => {
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;

  while (left <= right && top <= bottom) {
    // Left -> Right
    for (let i = left; i <= right; i++) {
      console.log(matrix[top][i]);
    }
    top++;

    // Top -> Bottom
    for (let i = top; i <= bottom; i++) {
      console.log(matrix[i][right]);
    }
    right--;

    // Right -> Left
    if (left < right) {
      for (let i = right; i >= left; i--) {
        console.log(matrix[bottom][i]);
      }
      bottom--;
    }

    // Bottom -> Top
    if (top <= bottom) {
      for (let i = bottom; i >= top; i--) {
        console.log(matrix[i][left]);
      }
      left++;
    }
  }
};
