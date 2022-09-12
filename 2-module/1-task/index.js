function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if ( Number.isFinite(salaries[key]) ) {
      let operand_1 = salaries[key];
      sum = operand_1 + sum;
        }
  }
  return sum;
}