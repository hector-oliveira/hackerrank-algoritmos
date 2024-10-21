function dayOfProgrammer(year: number): string {
  const dates = {
    leapYear: `12.09.${year}`,
    default: `13.09.${year}`,
    special: "26.09.1918",
  };

  const isJulianCalendar = year < 1918 && year % 4 === 0;
  const isGregorianCalendar =
    year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));

  return year === 1918
    ? dates.special
    : isJulianCalendar || isGregorianCalendar
    ? dates.leapYear
    : dates.default;
}
