function pageCount(n: number, p: number): number {
  let pagesToTurnFromTheBeg = Math.floor(p / 2);
  let pagesToTurnFromTheEnd = Math.floor(n / 2) - Math.floor(p / 2);

  return Math.min(pagesToTurnFromTheBeg, pagesToTurnFromTheEnd);
}
