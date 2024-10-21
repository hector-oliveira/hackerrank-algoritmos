function miniMaxSum(arr: number[]): void {
  arr.sort((a, b) => a - b);
  const sum = arr.reduce((a, b) => a + b);
  const minSum = sum - arr[arr.length - 1];
  const maxSum = sum - arr[0];

  console.log(minSum, maxSum);
}
