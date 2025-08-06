const spiralOrderMatrix = (n) => {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let current = 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = current++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = current++;
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = current++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = current++;
      }
      left++;
    }
  }

  return matrix;
};
