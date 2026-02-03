/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

// Create teachers with different experiences
const cppTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 5
};

const javaTeacher: Subjects.Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  experienceTeachingJava: 3
};

const reactTeacher: Subjects.Teacher = {
  firstName: 'Mike',
  lastName: 'Johnson',
  experienceTeachingReact: 7
};

const inexperiencedTeacher: Subjects.Teacher = {
  firstName: 'Alice',
  lastName: 'Brown'
  // No teaching experience specified
};

const multiSkilledTeacher: Subjects.Teacher = {
  firstName: 'Robert',
  lastName: 'Williams',
  experienceTeachingC: 4,
  experienceTeachingJava: 6,
  experienceTeachingReact: 2
};

// Test Cpp class
console.log('=== Testing Cpp Class ===');
const cppSubject = new Subjects.Cpp(cppTeacher);
console.log('Requirements:', cppSubject.getRequirements());
console.log('Available Teacher:', cppSubject.getAvailableTeacher());

const cppNoTeacher = new Subjects.Cpp(inexperiencedTeacher);
console.log('\nCpp with inexperienced teacher:');
console.log('Available Teacher:', cppNoTeacher.getAvailableTeacher());

// Test Java class
console.log('\n=== Testing Java Class ===');
const javaSubject = new Subjects.Java(javaTeacher);
console.log('Requirements:', javaSubject.getRequirements());
console.log('Available Teacher:', javaSubject.getAvailableTeacher());

const javaNoTeacher = new Subjects.Java(inexperiencedTeacher);
console.log('\nJava with inexperienced teacher:');
console.log('Available Teacher:', javaNoTeacher.getAvailableTeacher());

// Test React class
console.log('\n=== Testing React Class ===');
const reactSubject = new Subjects.React(reactTeacher);
console.log('Requirements:', reactSubject.getRequirements());
console.log('Available Teacher:', reactSubject.getAvailableTeacher());

const reactNoTeacher = new Subjects.React(inexperiencedTeacher);
console.log('\nReact with inexperienced teacher:');
console.log('Available Teacher:', reactNoTeacher.getAvailableTeacher());

// Test with multi-skilled teacher
console.log('\n=== Testing Multi-skilled Teacher ===');
const cppMulti = new Subjects.Cpp(multiSkilledTeacher);
const javaMulti = new Subjects.Java(multiSkilledTeacher);
const reactMulti = new Subjects.React(multiSkilledTeacher);

console.log('Cpp:', cppMulti.getAvailableTeacher());
console.log('Java:', javaMulti.getAvailableTeacher());
console.log('React:', reactMulti.getAvailableTeacher());

// Test setter method
console.log('\n=== Testing Setter Method ===');
const emptySubject = new Subjects.Cpp();
console.log('Before setting teacher:', emptySubject.getAvailableTeacher());

emptySubject.setTeacher(cppTeacher);
console.log('After setting teacher:', emptySubject.getAvailableTeacher());

// Test changing teacher
console.log('\n=== Testing Teacher Change ===');
const subject = new Subjects.Java(javaTeacher);
console.log('Initial teacher:', subject.getAvailableTeacher());

subject.teacher = inexperiencedTeacher; // Using setter
console.log('After changing to inexperienced teacher:', subject.getAvailableTeacher());

subject.setTeacher(multiSkilledTeacher); // Using setTeacher method
console.log('After changing to multi-skilled teacher:', subject.getAvailableTeacher());

// Demonstrate teacher property using getter
console.log('\n=== Teacher Properties ===');
console.log('Cpp Teacher:', cppSubject.teacher ? `${cppSubject.teacher.firstName} ${cppSubject.teacher.lastName}` : 'No teacher');
console.log('Java Teacher:', javaSubject.teacher ? `${javaSubject.teacher.firstName} ${javaSubject.teacher.lastName}` : 'No teacher');
console.log('React Teacher:', reactSubject.teacher ? `${reactSubject.teacher.firstName} ${reactSubject.teacher.lastName}` : 'No teacher');

// Array of subjects
console.log('\n=== Array of Subjects ===');
const subjects: Subjects.Subject[] = [
  new Subjects.Cpp(cppTeacher),
  new Subjects.Java(javaTeacher),
  new Subjects.React(reactTeacher),
  new Subjects.Cpp(inexperiencedTeacher),
  new Subjects.Java(multiSkilledTeacher)
];

subjects.forEach((subject, index) => {
  if (subject instanceof Subjects.Cpp) {
    console.log(`Subject ${index + 1} (Cpp): ${(subject as Subjects.Cpp).getAvailableTeacher()}`);
  } else if (subject instanceof Subjects.Java) {
    console.log(`Subject ${index + 1} (Java): ${(subject as Subjects.Java).getAvailableTeacher()}`);
  } else if (subject instanceof Subjects.React) {
    console.log(`Subject ${index + 1} (React): ${(subject as Subjects.React).getAvailableTeacher()}`);
  }
});

// Export for testing
export {
  cppTeacher,
  javaTeacher,
  reactTeacher,
  inexperiencedTeacher,
  multiSkilledTeacher
};
