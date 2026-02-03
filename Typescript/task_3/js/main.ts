/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create a row object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert row and get new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with age field
const updatedRow: RowElement = { 
  firstName: 'Guillaume', 
  lastName: 'Salva', 
  age: 23 
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

// Additional testing to demonstrate functionality
console.log('\n=== Additional Testing ===');

// Test with multiple rows
const row2: RowElement = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

const row3: RowElement = {
  firstName: 'Jane',
  lastName: 'Smith'
};

// Insert additional rows
const row2ID: RowID = CRUD.insertRow(row2);
console.log(`Inserted row2 with ID: ${row2ID}`);

const row3ID: RowID = CRUD.insertRow(row3);
console.log(`Inserted row3 with ID: ${row3ID}`);

// Update row3 with age
const updatedRow3: RowElement = {
  ...row3,
  age: 25
};
CRUD.updateRow(row3ID, updatedRow3);

// Delete row2
CRUD.deleteRow(row2ID);

// Demonstrate type safety
console.log('\n=== Type Safety Demonstration ===');

// These would cause TypeScript errors if uncommented:
// const invalidRow: RowElement = { firstName: 'Test' }; // Error: lastName is missing
// const invalidRow2: RowElement = { firstName: 123, lastName: 'Test' }; // Error: firstName must be string
// CRUD.insertRow('not an object'); // Error: Argument of type 'string' is not assignable to parameter of type 'RowElement'
// CRUD.updateRow('not a number', updatedRow); // Error: Argument of type 'string' is not assignable to parameter of type 'RowID'

// Working with arrays of RowElement
const rows: RowElement[] = [
  { firstName: 'Alice', lastName: 'Johnson', age: 28 },
  { firstName: 'Bob', lastName: 'Williams' },
  { firstName: 'Charlie', lastName: 'Brown', age: 35 }
];

console.log('\n=== Inserting Multiple Rows ===');
const rowIDs: RowID[] = rows.map(row => CRUD.insertRow(row));
console.log('Inserted row IDs:', rowIDs);

// Update all rows to add/update age
console.log('\n=== Updating Rows ===');
rowIDs.forEach((id, index) => {
  const updatedRow: RowElement = {
    ...rows[index],
    age: (rows[index].age || 0) + 1 // Increment age or set to 1 if undefined
  };
  CRUD.updateRow(id, updatedRow);
});

// Delete all rows
console.log('\n=== Deleting Rows ===');
rowIDs.forEach(id => CRUD.deleteRow(id));

// Export for testing
export { row, newRowID, updatedRow, row2, row2ID, row3, row3ID, rows, rowIDs };
