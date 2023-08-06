function sumSalary(salaries) {
  let sum = 0;
  for (let s in salaries) {
    if (typeof salaries[s] === 'number' && !isNaN(salaries[s]) && salaries[s] != Infinity && salaries[s] != -Infinity) {
      sum += salaries[s];
    }
  }

  return sum;
}
