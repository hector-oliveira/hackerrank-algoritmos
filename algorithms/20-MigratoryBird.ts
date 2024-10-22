function migratoryBirds(arr: number[]): number {
  let counts: { [key: number]: number } = {};
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  const maxValueRepeats = Math.max(...Object.values(counts));
  const keys = Object.keys(counts).find(
    (key) => counts[Number(key)] === maxValueRepeats
  );

  return Number(keys);
}

const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
console.log(migratoryBirds(numbers));
