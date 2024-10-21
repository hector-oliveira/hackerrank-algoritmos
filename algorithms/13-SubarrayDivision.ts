function birthday(s: number[], d: number, m: number): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let segmentsSum = 0;
    for (let j = 0; j < m; j++) {
      segmentsSum += s[i + j];
    }
    if (segmentsSum === d) {
      count++;
    }
  }
  return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));
