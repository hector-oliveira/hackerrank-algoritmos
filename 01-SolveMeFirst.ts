function solveMeFirst(a: number, b: number): number {
  return a + b;
}

function main() {
  const a: number = parseInt(readLine(), 10);
  const b: number = parseInt(readLine(), 10);
  const sum: number = solveMeFirst(a, b);
  console.log(sum);
}

function readLine(): string {
  throw new Error("Function not implemented.");
}
