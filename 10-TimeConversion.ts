function timeConversion(s: string): string {
  const formatTime = s.toLocaleLowerCase().slice(0, 10);
  let hour = Number(formatTime.slice(0, 2));
  const minutes = formatTime.slice(3, 5);
  const seconds = formatTime.slice(6, 8);
  const period = formatTime.slice(8, 10);

  if (period === "pm" && hour !== 12) {
    hour += 12;
  } else if (period === "am" && hour === 12) {
    hour = 0;
  }

  const formattedHour = String(hour).padStart(2, "0");
  const formattedMinutes = minutes.padStart(2, "0");
  const formattedSeconds = seconds.padStart(2, "0");

  return `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
}
