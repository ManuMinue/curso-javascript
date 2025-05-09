function average(grades) {
  let sum = 0;
  for (let note of grades) {
    sum += note;
  }
  return sum / grades.length;
}
