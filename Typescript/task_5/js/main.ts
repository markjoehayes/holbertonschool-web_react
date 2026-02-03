// Interfaces with brand properties for nominal typing
interface MajorCredits {
  credits: number;
  _brand: 'Major'; // Brand property for unique identification
}

interface MinorCredits {
  credits: number;
  _brand: 'Minor'; // Brand property for unique identification
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    _brand: 'Major' as const // Type assertion to ensure correct brand
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    _brand: 'Minor' as const // Type assertion to ensure correct brand
  };
}

// Test the functions
console.log('=== Testing Brand Convention & Nominal Typing ===\n');

// Create test subjects
const majorSubject1: MajorCredits = { credits: 3, _brand: 'Major' };
const majorSubject2: MajorCredits = { credits: 4, _brand: 'Major' };
const majorSubject3: MajorCredits = { credits: 2, _brand: 'Major' };

const minorSubject1: MinorCredits = { credits: 1, _brand: 'Minor' };
const minorSubject2: MinorCredits = { credits: 2, _brand: 'Minor' };
const minorSubject3: MinorCredits = { credits: 1.5, _brand: 'Minor' };

// Test sumMajorCredits
console.log('Testing sumMajorCredits:');
console.log(`Major Subject 1: ${majorSubject1.credits} credits`);
console.log(`Major Subject 2: ${majorSubject2.credits} credits`);
const majorSum = sumMajorCredits(majorSubject1, majorSubject2);
console.log(`Sum: ${majorSum.credits} credits`);
console.log(`Type: ${majorSum._brand}`);

const majorSum2 = sumMajorCredits(majorSum, majorSubject3);
console.log(`\nAdding Major Subject 3 (${majorSubject3.credits} credits):`);
console.log(`Total Major Credits: ${majorSum2.credits}`);

// Test sumMinorCredits
console.log('\nTesting sumMinorCredits:');
console.log(`Minor Subject 1: ${minorSubject1.credits} credits`);
console.log(`Minor Subject 2: ${minorSubject2.credits} credits`);
const minorSum = sumMinorCredits(minorSubject1, minorSubject2);
console.log(`Sum: ${minorSum.credits} credits`);
console.log(`Type: ${minorSum._brand}`);

const minorSum2 = sumMinorCredits(minorSum, minorSubject3);
console.log(`\nAdding Minor Subject 3 (${minorSubject3.credits} credits):`);
console.log(`Total Minor Credits: ${minorSum2.credits}`);

// Demonstrate type safety
console.log('\n=== Type Safety Demonstration ===');

// These would cause TypeScript errors if uncommented:
// const mixedSum = sumMajorCredits(majorSubject1, minorSubject1); // Error: Argument of type 'MinorCredits' is not assignable to parameter of type 'MajorCredits'
// const mixedSum2 = sumMinorCredits(minorSubject1, majorSubject1); // Error: Argument of type 'MajorCredits' is not assignable to parameter of type 'MinorCredits'

// Create invalid objects (would cause errors)
// const invalidMajor: MajorCredits = { credits: 3 }; // Error: Property '_brand' is missing
// const invalidMinor: MinorCredits = { credits: 2, _brand: 'Major' }; // Error: Type '"Major"' is not assignable to type '"Minor"'

// Working with arrays
console.log('\n=== Working with Arrays ===');

const majorSubjects: MajorCredits[] = [
  { credits: 3, _brand: 'Major' },
  { credits: 4, _brand: 'Major' },
  { credits: 3, _brand: 'Major' }
];

const minorSubjects: MinorCredits[] = [
  { credits: 1, _brand: 'Minor' },
  { credits: 2, _brand: 'Minor' },
  { credits: 1, _brand: 'Minor' }
];

// Calculate total major credits
let totalMajorCredits: MajorCredits = { credits: 0, _brand: 'Major' };
majorSubjects.forEach(subject => {
  totalMajorCredits = sumMajorCredits(totalMajorCredits, subject);
});
console.log(`Total Major Credits from array: ${totalMajorCredits.credits}`);

// Calculate total minor credits
let totalMinorCredits: MinorCredits = { credits: 0, _brand: 'Minor' };
minorSubjects.forEach(subject => {
  totalMinorCredits = sumMinorCredits(totalMinorCredits, subject);
});
console.log(`Total Minor Credits from array: ${totalMinorCredits.credits}`);

// Factory functions to create subjects
function createMajorCredits(credits: number): MajorCredits {
  return { credits, _brand: 'Major' } as const;
}

function createMinorCredits(credits: number): MinorCredits {
  return { credits, _brand: 'Minor' } as const;
}

console.log('\n=== Using Factory Functions ===');
const majorFromFactory = createMajorCredits(5);
const minorFromFactory = createMinorCredits(2);
console.log(`Created Major: ${majorFromFactory.credits} credits, brand: ${majorFromFactory._brand}`);
console.log(`Created Minor: ${minorFromFactory.credits} credits, brand: ${minorFromFactory._brand}`);

// Type guard functions
function isMajorCredits(subject: any): subject is MajorCredits {
  return subject && typeof subject === 'object' && subject._brand === 'Major';
}

function isMinorCredits(subject: any): subject is MinorCredits {
  return subject && typeof subject === 'object' && subject._brand === 'Minor';
}

console.log('\n=== Type Guard Tests ===');
console.log(`majorSubject1 is MajorCredits: ${isMajorCredits(majorSubject1)}`);
console.log(`majorSubject1 is MinorCredits: ${isMinorCredits(majorSubject1)}`);
console.log(`minorSubject1 is MajorCredits: ${isMajorCredits(minorSubject1)}`);
console.log(`minorSubject1 is MinorCredits: ${isMinorCredits(minorSubject1)}`);

// Export for testing
export {
  MajorCredits,
  MinorCredits,
  sumMajorCredits,
  sumMinorCredits,
  createMajorCredits,
  createMinorCredits,
  isMajorCredits,
  isMinorCredits,
  majorSubject1,
  majorSubject2,
  minorSubject1,
  minorSubject2
};
