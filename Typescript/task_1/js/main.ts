// Define the Teacher interface
interface Teacher {
  // These properties can only be set during initialization (readonly)
  readonly firstName: string;
  readonly lastName: string;
  
  // Required properties
  fullTimeEmployee: boolean;
  location: string;
  
  // Optional property
  yearsOfExperience?: number;
  
  // Index signature for additional properties
  [propName: string]: any;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  // Required attribute for Directors
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Alternative implementation using regular function syntax
// function printTeacher(firstName: string, lastName: string): string {
//   return `${firstName[0]}. ${lastName}`;
// }

// Example usage from the assignment
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Test with different scenarios
const director2: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 25,
  yearsOfExperience: 15,
  contract: true,
};

const director3: Directors = {
  firstName: 'Mike',
  lastName: 'Johnson',
  location: 'Paris',
  fullTimeEmployee: false,
  numberOfReports: 8,
  department: 'Engineering',
};

// Example from previous task
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Test the printTeacher function with different inputs
console.log('Testing printTeacher function:');
console.log('printTeacher("John", "Doe"):', printTeacher("John", "Doe"));
console.log('printTeacher("Jane", "Smith"):', printTeacher("Jane", "Smith"));
console.log('printTeacher("Mike", "Johnson"):', printTeacher("Mike", "Johnson"));
console.log('printTeacher("Alice", "Wonderland"):', printTeacher("Alice", "Wonderland"));

// Test with director and teacher names
console.log('\nPrinting director names:');
console.log(`Director 1: ${printTeacher(director1.firstName, director1.lastName)}`);
console.log(`Director 2: ${printTeacher(director2.firstName, director2.lastName)}`);
console.log(`Director 3: ${printTeacher(director3.firstName, director3.lastName)}`);
console.log(`Teacher 3: ${printTeacher(teacher3.firstName, teacher3.lastName)}`);

// Test edge cases
console.log('\nTesting edge cases:');
console.log('printTeacher("A", "Single"):', printTeacher("A", "Single"));
console.log('printTeacher("", "EmptyFirstName"):', printTeacher("", "EmptyFirstName"));

// Function that uses the printTeacherFunction interface
function formatTeacherName(printer: printTeacherFunction, firstName: string, lastName: string): string {
  return `Formatted: ${printer(firstName, lastName)}`;
}

console.log('\nUsing interface with a function:');
console.log(formatTeacherName(printTeacher, "Robert", "Brown"));

// Create another function that matches the printTeacherFunction interface
const alternativePrinter: printTeacherFunction = (first: string, last: string): string => {
  const firstInitial = first.length > 0 ? first[0].toUpperCase() : '';
  return `${firstInitial}. ${last}`;
};

console.log('\nAlternative printer:');
console.log(alternativePrinter("john", "doe")); // Should print "J. doe"
console.log(alternativePrinter("MARY", "JANE")); // Should print "M. JANE"

console.log('\nDirector 1:');
console.log(director1);

console.log('\nDirector 2:');
console.log(director2);

console.log('\nDirector 3:');
console.log(director3);

console.log('\nTeacher 3:');
console.log(teacher3);

// Function to display Director information
function displayDirector(director: Directors): void {
  console.log(`\nDisplaying Director ${printTeacher(director.firstName, director.lastName)}:`);
  console.log(`Location: ${director.location}`);
  console.log(`Full Time: ${director.fullTimeEmployee}`);
  console.log(`Number of Reports: ${director.numberOfReports}`);
  
  if (director.yearsOfExperience) {
    console.log(`Years of Experience: ${director.yearsOfExperience}`);
  }
  
  // Display any additional properties
  for (const key in director) {
    const standardKeys = ['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience', 'numberOfReports'];
    if (!standardKeys.includes(key)) {
      console.log(`${key}: ${director[key]}`);
    }
  }
}

// Function to display Teacher information
function displayTeacher(teacher: Teacher): void {
  console.log(`\nDisplaying Teacher ${printTeacher(teacher.firstName, teacher.lastName)}:`);
  console.log(`Location: ${teacher.location}`);
  console.log(`Full Time: ${teacher.fullTimeEmployee}`);
  
  if (teacher.yearsOfExperience) {
    console.log(`Years of Experience: ${teacher.yearsOfExperience}`);
  }
  
  // Display any additional properties
  for (const key in teacher) {
    const standardKeys = ['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience'];
    if (!standardKeys.includes(key)) {
      console.log(`${key}: ${teacher[key]}`);
    }
  }
}

// Display all directors and teachers
console.log('\n=== Detailed Information ===');
displayDirector(director1);
displayDirector(director2);
displayDirector(director3);
displayTeacher(teacher3);

// Export interfaces and examples for testing
export { 
  Teacher, 
  Directors, 
  printTeacherFunction,
  printTeacher,
  teacher3, 
  director1, 
  director2, 
  director3,
  formatTeacherName
};
