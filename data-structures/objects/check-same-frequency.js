// Using JavaScript Objects
// const haveSameFrequency = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   const freqMap1 = {};
//   const freqMap2 = {};
//   for (let num of arr1) {
//     freqMap1[num] = (freqMap1[num] || 0) + 1;
//   }
//   for (let num of arr2) {
//     freqMap2[num] = (freqMap2[num] || 0) + 1;
//   }
//   for (let key in freqMap1) {
//     if (freqMap1[key] !== freqMap2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// Using JavaScript Map
const haveSameFrequency = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const freqMap1 = new Map();
  const freqMap2 = new Map();

  for (let num of arr1) {
    freqMap1.set(num, (freqMap1.get(num) || 0) + 1);
  }

  for (let num of arr2) {
    freqMap2.set(num, (freqMap2.get(num) || 0) + 1);
  }

  for (let key of freqMap1.keys()) {
    console.log(
      freqMap1.get(key),
      freqMap2.get(key),
      freqMap1.get(key) !== freqMap2.get(key)
    );
    if (freqMap1.get(key) !== freqMap2.get(key)) {
      return false;
    }
  }

  return true;
};

console.log(haveSameFrequency([1, 2, 3, 3], [3, 1, 2, 3])); // true
console.log(haveSameFrequency([1, 2, 2, 3], [3, 2, 2, 4])); // false
