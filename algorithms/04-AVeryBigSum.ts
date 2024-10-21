function aVeryBigSum(ar: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
