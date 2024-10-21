function multiplyBigInt(num1: number[], num2: number): number[] {
  let carry = 0;
  const result: number[] = [];

  for (let i = 0; i < num1.length || carry !== 0; i++) {
    const digit = num1[i] || 0;
    const product = digit * num2 + carry;
    result.push(product % 10);
    carry = Math.floor(product / 10);
  }

  return result;
}

function bigIntToString(num: number[]): string {
  return num.reverse().join("");
}

function extraLongFactorials(n: number): void {
  let result = [1];
  for (let i = 1; i <= n; i++) {
    result = multiplyBigInt(result, i);
  }
  console.log(bigIntToString(result));
}
