function compareTriplets(a: number[], b: number[]): number[] {
  let alicePoints = 0;
  let bobPoints = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    }
  }

  return [alicePoints, bobPoints];
}
