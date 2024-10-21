function breakingRecords(scores: number[]): number[] {
  let min = scores[0];
  let max = scores[0];
  const result = scores.reduce(
    (acc, currScores) => {
      acc[1] += currScores < min ? 1 : 0;
      acc[0] += currScores > max ? 1 : 0;
      min = Math.min(min, currScores);
      max = Math.max(max, currScores);

      return acc;
    },
    [0, 0]
  );

  return result;
}
