function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

    if (grade < 38) {
      return grade;
    }

    if (nextMultipleOfFive - grade < 3) {
      return nextMultipleOfFive;
    }

    return grade;
  });
}
