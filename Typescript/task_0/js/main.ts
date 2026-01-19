// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student variables
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Create table and render it using Vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Create header row
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
const headerLocation = document.createElement('th');

headerFirstName.textContent = 'First Name';
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tbody.appendChild(headerRow);

// Create a row for each student
studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

// Export for testing purposes
export { Student, studentsList };
