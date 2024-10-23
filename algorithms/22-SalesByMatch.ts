const paired = [10, 20, 20, 30, 10, 40, 10, 40, 25];

function sockMerchant(n: number, ar: number[]): number {
  const result = ar.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {} as { [key: number]: number });

  const resp = Object.values(result).reduce((acc, curr) => {
    acc += Math.floor(curr / 2);
    return acc;
  }, 0);

  return resp;
}

console.log(sockMerchant(7, paired));
