function diagonalDifference(arr: number[][]): number {
  const letfDiagonal = arr.reduce((a, b, i) => a + b[i], 0);
  const rightDiagonal = arr.reduce((a, b, i) => a + b[b.length - 1 - i], 0);

  const absoluteResult = Math.abs(letfDiagonal - rightDiagonal);

  return absoluteResult;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log(diagonalDifference(arr));
