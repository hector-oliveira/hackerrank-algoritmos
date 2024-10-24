function findPoint(px: number, py: number, qx: number, qy: number): number[] {
  const rx = 2 * qx - px;
  const ry = 2 * qy - py;
  return [rx, ry];
}
