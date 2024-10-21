function getTotalX(a: number[], b: number[]): number {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (a.every((x) => i % x === 0) && b.every((x) => x % i === 0)) {
      count++;
    }
  }
  return count;
}
