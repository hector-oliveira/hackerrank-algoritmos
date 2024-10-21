function simpleArraySum(ar: number[]): number {
  const sum = ar.reduce((a, b) => a + b, 0);
  return sum;
}

const ar = [1, 2, 3, 4, 5];
const result = simpleArraySum(ar);
console.log(result);
