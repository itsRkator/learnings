const findGCD = (num1, num2) => {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error('Inputs must be integers.');
  }

  return num2 === 0 ? Math.abs(num1) : findGCD(num2, num1 % num2);
};

// Test cases
// console.log(findGCD(-120, -48)); // Output: 24
// console.log(findGCD(120, -48)); // Output: 24
// console.log(findGCD(-120, 48)); // Output: 24
// console.log(findGCD(120, 48)); // Output: 24
