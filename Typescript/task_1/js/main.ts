// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Define the interface for the printTeacher function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Define the interface for the StudentClass constructor
  interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Define the interface for the StudentClass
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Create teacher object
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  // Create director object
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Test the printTeacher function
  console.log(printTeacher("John", "Doe"));
  
  // Test the StudentClass
  const student1: StudentClassInterface = new StudentClass("Jane", "Smith");
  console.log(student1.displayName());
  console.log(student1.workOnHomework());
