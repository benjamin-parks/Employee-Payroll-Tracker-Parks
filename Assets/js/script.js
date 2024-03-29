// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// set empty array for employee objects
const employees = [];

// Collect employee data
const collectEmployees = function() {
    let run = true;
    const employees = [];

    while (run === true){
      const employee = {};
      const firstName = window.prompt("What is your first name?");
      // console.log("firstName", firstName);
      if (firstName === null){
        run = false;
        console.log(run)
      }
      employee.firstName = firstName;

      const lastName = window.prompt("What is your last name?");
      // console.log("lastName", lastName);
      if (lastName === null){
        run = false;
        console.log(run);
      }
      employee.lastName = lastName;

      let salary = window.prompt("What is your salary?");
      if (salary === null){
        run = false;
      }
      if (isNaN(salary)){
        salary = 0
        // console.log(salary);
      }
      // // format salary to USD
      // const formattedNumber = formatter.format(salary);

      // // add USD salary to employee object
      employee.salary = Number(salary);

      // push employee to the employees array
      employees.push(employee);

      const quit = window.confirm("Add another employee?");
      // console.log("quit", quit);
      if (quit === false){
        run = false;
        // console.log(run);
      
    }
  }
  return employees;
  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let money = 0;
  // console.log(employeesArray);
  for (const employee of employeesArray){
    // console.log(employee.salary);
    money += employee.salary;
    // console.log("Total Money", money)
  }
  money /= employeesArray.length;
  console.log(`The average salary is ${money}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]
  console.log(`The random employee is ${randomEmployee.firstName} ${randomEmployee.lastName}.`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
