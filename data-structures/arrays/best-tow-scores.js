const firstBestTwoScores = (scores) => {
  if (!scores.length || scores.length < 2) return -1;

  let firstBest = -Infinity;
  let secondBest = -Infinity;

  for (const score of scores) {
    if (score > firstBest) {
      secondBest = firstBest;
      firstBest = score;
    } else if (score > secondBest) {
      secondBest = score;
    }
  }

  return [firstBest, secondBest];
};

console.log(firstBestTwoScores([10, 20, 4, 50, 40])); // [50, 40]
console.log(firstBestTwoScores([100, 100])); // [100, 100]
console.log(firstBestTwoScores([5])); // -1
console.log(firstBestTwoScores([])); // -1
