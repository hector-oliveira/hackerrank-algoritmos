function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  let applesCount = 0;
  let orangesCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      applesCount++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      orangesCount++;
    }
  }
  console.log(applesCount);
  console.log(orangesCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
