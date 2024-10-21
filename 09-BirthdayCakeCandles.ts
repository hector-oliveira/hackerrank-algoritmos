function birthdayCakeCandles(candles: number[]): number {
  const heightCandle = Math.max(...candles);
  const countCandles = candles.filter(
    (candle) => candle === heightCandle
  ).length;

  return countCandles;
}
