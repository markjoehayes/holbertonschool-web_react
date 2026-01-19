// Define interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Union type for Employee
type Employee = Director | Teacher;

// Function to create employee based on salary
function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test cases from the assignment
console.log('Testing createEmployee function:');
console.log('createEmployee(200):', createEmployee(200));
console.log('createEmployee(1000):', createEmployee(1000));
console.log('createEmployee("$500"):', createEmployee('$500'));

// Additional test cases
console.log('\nAdditional test cases:');
console.log('createEmployee(499):', createEmployee(499));
console.log('createEmployee(500):', createEmployee(500));
console.log('createEmployee(0):', createEmployee(0));
console.log('createEmployee("100"):', createEmployee('100'));
console.log('createEmployee(""):', createEmployee(''));

// Testing method calls on returned instances
console.log('\nTesting methods on created employees:');

const employee1 = createEmployee(200);
console.log('\nEmployee 1 (salary: 200):');
console.log('Type:', employee1.constructor.name);
if ('workTeacherTasks' in employee1) {
  console.log('workFromHome():', employee1.workFromHome());
  console.log('getCoffeeBreak():', employee1.getCoffeeBreak());
  console.log('workTeacherTasks():', employee1.workTeacherTasks());
}

const employee2 = createEmployee(1000);
console.log('\nEmployee 2 (salary: 1000):');
console.log('Type:', employee2.constructor.name);
if ('workDirectorTasks' in employee2) {
  console.log('workFromHome():', employee2.workFromHome());
  console.log('getCoffeeBreak():', employee2.getCoffeeBreak());
  console.log('workDirectorTasks():', employee2.workDirectorTasks());
}

const employee3 = createEmployee('$500');
console.log('\nEmployee 3 (salary: "$500"):');
console.log('Type:', employee3.constructor.name);
if ('workDirectorTasks' in employee3) {
  console.log('workFromHome():', employee3.workFromHome());
  console.log('getCoffeeBreak():', employee3.getCoffeeBreak());
  console.log('workDirectorTasks():', employee3.workDirectorTasks());
}

// Type guard functions
function isDirector(employee: Employee): employee is Director {
  return 'workDirectorTasks' in employee;
}

function isTeacher(employee: Employee): employee is Teacher {
  return 'workTeacherTasks' in employee;
}

// Function to execute work based on employee type
function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else if (isTeacher(employee)) {
    return employee.workTeacherTasks();
  }
  return 'Unknown employee type';
}

// Test type guards and executeWork function
console.log('\nTesting type guards and executeWork:');

const testEmployees: Array<{ salary: number | string; expectedType: string }> = [
  { salary: 200, expectedType: 'Teacher' },
  { salary: 1000, expectedType: 'Director' },
  { salary: '$500', expectedType: 'Director' },
  { salary: 499, expectedType: 'Teacher' },
  { salary: 500, expectedType: 'Director' }
];

testEmployees.forEach((test, index) => {
  const employee = createEmployee(test.salary);
  console.log(`\nTest ${index + 1} (salary: ${test.salary}):`);
  console.log(`Expected type: ${test.expectedType}`);
  console.log(`Actual type: ${employee.constructor.name}`);
  console.log(`isDirector: ${isDirector(employee)}`);
  console.log(`isTeacher: ${isTeacher(employee)}`);
  console.log(`executeWork: ${executeWork(employee)}`);
});

// Create arrays of employees
const lowSalaryEmployees: Employee[] = [200, 300, 400].map(salary => createEmployee(salary));
const highSalaryEmployees: Employee[] = [500, 600, 700].map(salary => createEmployee(salary));

console.log('\nLow salary employees (all should be Teachers):');
lowSalaryEmployees.forEach((emp, idx) => {
  console.log(`Employee ${idx + 1}: ${emp.constructor.name} - ${executeWork(emp)}`);
});

console.log('\nHigh salary employees (all should be Directors):');
highSalaryEmployees.forEach((emp, idx) => {
  console.log(`Employee ${idx + 1}: ${emp.constructor.name} - ${executeWork(emp)}`);
});

// Export for testing
export {
  DirectorInterface,
  TeacherInterface,
  Director,
  Teacher,
  createEmployee,
  isDirector,
  isTeacher,
  executeWork,
  Employee
};
