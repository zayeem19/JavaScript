function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 59) return "F";
  if (average < 60) return "D";
  if (average < 71) return "C";
  if (average < 81) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

console.log(calculateGrade([40, 50, 60]));
