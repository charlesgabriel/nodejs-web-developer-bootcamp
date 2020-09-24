const employees = [
  { employeeId: "25", workHour: "100", wageHour: "5.50" },
  { employeeId: "1", workHour: "200", wageHour: "20.50" },
  { employeeId: "6", workHour: "145", wageHour: "15.55" },
];

employees.forEach((employee) => {
  calcEmployeeSalary(employee);
});

function calcEmployeeSalary(employee) {
  let employeeId = parseInt(employee.employeeId);
  let workHour = parseInt(employee.workHour);
  let wageHour = parseFloat(employee.wageHour);
  let salary = parseFloat(workHour * wageHour).toFixed(2);
  console.log("NUMBER = " + employeeId);
  console.log("SALARY = U$ " + salary);
}