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

// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to create employee based on salary
function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Function isDirector - type predicate
function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}

// Function executeWork
function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Function teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    // This should never happen due to the Subjects type, but TypeScript needs this
    throw new Error(`Invalid subject: ${todayClass}`);
  }
}

// Alternative implementation using switch statement
function teachClassSwitch(todayClass: Subjects): string {
  switch (todayClass) {
    case 'Math':
      return 'Teaching Math';
    case 'History':
      return 'Teaching History';
    default:
      // Exhaustiveness check - if we add more Subjects later, TypeScript will warn us
      const exhaustiveCheck: never = todayClass;
      return exhaustiveCheck;
  }
}

// Test the functions as required
console.log('=== Testing executeWork ===');
console.log('executeWork(createEmployee(200)):', executeWork(createEmployee(200)));
console.log('executeWork(createEmployee(1000)):', executeWork(createEmployee(1000)));

console.log('\n=== Testing teachClass ===');
console.log("teachClass('Math'):", teachClass('Math'));
console.log("teachClass('History'):", teachClass('History'));

console.log('\n=== Testing teachClassSwitch ===');
console.log("teachClassSwitch('Math'):", teachClassSwitch('Math'));
console.log("teachClassSwitch('History'):", teachClassSwitch('History'));

// Test with variables of type Subjects
const mathClass: Subjects = 'Math';
const historyClass: Subjects = 'History';

console.log('\n=== Testing with Subjects variables ===');
console.log('mathClass:', mathClass, '->', teachClass(mathClass));
console.log('historyClass:', historyClass, '->', teachClass(historyClass));

// Demonstrate type safety - these would cause TypeScript errors if uncommented:
// const invalidClass: Subjects = 'Science'; // Error: Type '"Science"' is not assignable to type 'Subjects'
// teachClass('English'); // Error: Argument of type '"English"' is not assignable to parameter of type 'Subjects'

// Array of valid Subjects
const classSchedule: Subjects[] = ['Math', 'History', 'Math', 'History'];
console.log('\n=== Class Schedule ===');
classSchedule.forEach((subject, index) => {
  console.log(`Period ${index + 1}: ${teachClass(subject)}`);
});

// Function that accepts Subjects type
function prepareForClass(subject: Subjects): string {
  switch (subject) {
    case 'Math':
      return 'Preparing formulas and exercises';
    case 'History':
      return 'Preparing historical timelines';
    default:
      return 'Preparing general materials';
  }
}

console.log('\n=== Class Preparation ===');
console.log(`Math preparation: ${prepareForClass('Math')}`);
console.log(`History preparation: ${prepareForClass('History')}`);

// Using Subjects in an object
interface ClassInfo {
  subject: Subjects;
  duration: number;
  room: string;
}

const mathClassInfo: ClassInfo = {
  subject: 'Math',
  duration: 60,
  room: 'Room 101'
};

const historyClassInfo: ClassInfo = {
  subject: 'History',
  duration: 45,
  room: 'Room 202'
};

console.log('\n=== Class Information ===');
console.log('Math class:', mathClassInfo);
console.log('History class:', historyClassInfo);

// Test isDirector function
console.log('\n=== Testing isDirector function ===');
const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);
console.log(`isDirector(createEmployee(200)): ${isDirector(emp1)}`);
console.log(`isDirector(createEmployee(1000)): ${isDirector(emp2)}`);

// Export for testing
export {
  DirectorInterface,
  TeacherInterface,
  Director,
  Teacher,
  Subjects,
  createEmployee,
  isDirector,
  executeWork,
  teachClass,
  Employee
};
