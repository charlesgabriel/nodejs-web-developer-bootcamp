// const values = [7, -5, 6, -3.4, 4.6, 12];

// employees.forEach((employee) => {
//   calcEmployeeSalary(employee);
// });

// values.forEach((value) => {
//   value = gets();
// });

// let positiveNumbers = values.reduce((total, value) => {
//   if (value > 0) return total = total + 1;
  
//   return total;
// }, 0);
// console.log(positiveNumbers + "valores positivos");

const numbers = [
  ['7', '-5', '6', '-3.4', '4.6', '12'],
  ['70', '67', '77', '99', '23', '1']
];

numbers.forEach((number) => {
  consult(number);
});

function consult(numbers) {
  let positiveNumbers = numbers.reduce((total, value) => {
    if (value > 0) return total = total + 1;
    
    return total;
  }, 0);
  console.log(positiveNumbers + " valores positivos");
}