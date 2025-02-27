const countWordFrequencies = (wordArr) => {
  const freqMap = {};

  wordArr.forEach((word) => {
    freqMap[word] = (freqMap[word] || 0) + 1;
  });

  return freqMap;
};

console.log(
  countWordFrequencies([
    'apple',
    'orange',
    'banana',
    'apple',
    'orange',
    'apple',
  ])
);
