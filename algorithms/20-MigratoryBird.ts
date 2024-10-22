function migratoryBirds(arr: number[]): number {
  const result = arr
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as { [key: number]: number });

  const quantityOfTimesMaxValueRepeats = Math.max(...Object.values(result));
  const keys = Object.keys(result).find(
    (numb) => result[Number(numb)] === quantityOfTimesMaxValueRepeats
  );

  return Number(keys);
}

const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
console.log(migratoryBirds(numbers));
