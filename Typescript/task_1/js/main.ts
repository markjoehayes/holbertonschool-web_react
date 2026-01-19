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
  yearsOfExperience: 15, // Optional property from Teacher interface
  contract: true, // Additional property allowed by index signature
};

const director3: Directors = {
  firstName: 'Mike',
  lastName: 'Johnson',
  location: 'Paris',
  fullTimeEmployee: false,
  numberOfReports: 8,
  department: 'Engineering', // Additional property
};

// Example from previous task (kept for reference)
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log('Director 1:');
console.log(director1);

console.log('\nDirector 2:');
console.log(director2);

console.log('\nDirector 3:');
console.log(director3);

console.log('\nTeacher 3 (for comparison):');
console.log(teacher3);

// Function to display Director information
function displayDirector(director: Directors): void {
  console.log(`\nDisplaying Director ${director.firstName} ${director.lastName}:`);
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

// Function to display Teacher information (for comparison)
function displayTeacher(teacher: Teacher): void {
  console.log(`\nDisplaying Teacher ${teacher.firstName} ${teacher.lastName}:`);
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

// Test that Directors can have all Teacher properties
const mixedDirector: Directors = {
  firstName: 'Sarah',
  lastName: 'Williams',
  fullTimeEmployee: true,
  location: 'Berlin',
  numberOfReports: 12,
  // All Teacher properties work
  yearsOfExperience: 8,
  // Additional properties work
  certification: ['PMP', 'Scrum Master'],
  contactEmail: 'sarah@example.com'
};

console.log('\nMixed Director with various properties:');
console.log(mixedDirector);

// Export interfaces and examples for testing
export { Teacher, Directors, teacher3, director1, director2, director3, mixedDirector };
