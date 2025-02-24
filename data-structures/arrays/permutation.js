const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};

// Test cases

// Different lengths
console.log(checkPermutation('abc', 'abcd')); // false
console.log(checkPermutation('a', 'bb')); // false
console.log(checkPermutation('xyz', 'xy')); // false

// Same characters, different order
console.log(checkPermutation('12345', '54321')); // true
console.log(checkPermutation('hello', 'ellho')); // true
console.log(checkPermutation('race', 'care')); // true

// Identical strings
console.log(checkPermutation('apple', 'apple')); // true
console.log(checkPermutation('test', 'test')); // true

// Different characters
console.log(checkPermutation('abc', 'def')); // false
console.log(checkPermutation('dog', 'cat')); // false
console.log(checkPermutation('hello', 'world')); // false

// Empty strings
console.log(checkPermutation('', '')); // true

// Special characters
console.log(checkPermutation('abc!', '!cba')); // true
console.log(checkPermutation('!@#$', '$#@!')); // true
console.log(checkPermutation('abc$', 'abc^')); // false
