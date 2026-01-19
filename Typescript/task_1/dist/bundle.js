/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   director1: () => (/* binding */ director1),
/* harmony export */   director2: () => (/* binding */ director2),
/* harmony export */   director3: () => (/* binding */ director3),
/* harmony export */   mixedDirector: () => (/* binding */ mixedDirector),
/* harmony export */   teacher3: () => (/* binding */ teacher3)
/* harmony export */ });
// Example usage from the assignment
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
// Test with different scenarios
var director2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    location: 'New York',
    fullTimeEmployee: true,
    numberOfReports: 25,
    yearsOfExperience: 15,
    contract: true, // Additional property allowed by index signature
};
var director3 = {
    firstName: 'Mike',
    lastName: 'Johnson',
    location: 'Paris',
    fullTimeEmployee: false,
    numberOfReports: 8,
    department: 'Engineering', // Additional property
};
// Example from previous task (kept for reference)
var teacher3 = {
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
function displayDirector(director) {
    console.log("\nDisplaying Director ".concat(director.firstName, " ").concat(director.lastName, ":"));
    console.log("Location: ".concat(director.location));
    console.log("Full Time: ".concat(director.fullTimeEmployee));
    console.log("Number of Reports: ".concat(director.numberOfReports));
    if (director.yearsOfExperience) {
        console.log("Years of Experience: ".concat(director.yearsOfExperience));
    }
    // Display any additional properties
    for (var key in director) {
        var standardKeys = ['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience', 'numberOfReports'];
        if (!standardKeys.includes(key)) {
            console.log("".concat(key, ": ").concat(director[key]));
        }
    }
}
// Function to display Teacher information (for comparison)
function displayTeacher(teacher) {
    console.log("\nDisplaying Teacher ".concat(teacher.firstName, " ").concat(teacher.lastName, ":"));
    console.log("Location: ".concat(teacher.location));
    console.log("Full Time: ".concat(teacher.fullTimeEmployee));
    if (teacher.yearsOfExperience) {
        console.log("Years of Experience: ".concat(teacher.yearsOfExperience));
    }
    // Display any additional properties
    for (var key in teacher) {
        var standardKeys = ['firstName', 'lastName', 'fullTimeEmployee', 'location', 'yearsOfExperience'];
        if (!standardKeys.includes(key)) {
            console.log("".concat(key, ": ").concat(teacher[key]));
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
var mixedDirector = {
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztBQUMzQixjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFekIsc0RBQXNEO0FBQ3RELElBQU0sYUFBYSxHQUFjO0lBQy9CLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZUFBZSxFQUFFLEVBQUU7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsNkJBQTZCO0lBQzdCLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUM7SUFDdEMsWUFBWSxFQUFFLG1CQUFtQjtDQUNsQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFM0IsNkNBQTZDO0FBQzJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBEZWZpbmUgdGhlIFRlYWNoZXIgaW50ZXJmYWNlXG5pbnRlcmZhY2UgVGVhY2hlciB7XG4gIC8vIFRoZXNlIHByb3BlcnRpZXMgY2FuIG9ubHkgYmUgc2V0IGR1cmluZyBpbml0aWFsaXphdGlvbiAocmVhZG9ubHkpXG4gIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICBcbiAgLy8gUmVxdWlyZWQgcHJvcGVydGllc1xuICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBcbiAgLy8gT3B0aW9uYWwgcHJvcGVydHlcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gIFxuICAvLyBJbmRleCBzaWduYXR1cmUgZm9yIGFkZGl0aW9uYWwgcHJvcGVydGllc1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuLy8gRGVmaW5lIHRoZSBEaXJlY3RvcnMgaW50ZXJmYWNlIHRoYXQgZXh0ZW5kcyBUZWFjaGVyXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIC8vIFJlcXVpcmVkIGF0dHJpYnV0ZSBmb3IgRGlyZWN0b3JzXG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG4vLyBFeGFtcGxlIHVzYWdlIGZyb20gdGhlIGFzc2lnbm1lbnRcbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMTcsXG59O1xuXG4vLyBUZXN0IHdpdGggZGlmZmVyZW50IHNjZW5hcmlvc1xuY29uc3QgZGlyZWN0b3IyOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ0phbmUnLFxuICBsYXN0TmFtZTogJ1NtaXRoJyxcbiAgbG9jYXRpb246ICdOZXcgWW9yaycsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMjUsXG4gIHllYXJzT2ZFeHBlcmllbmNlOiAxNSwgLy8gT3B0aW9uYWwgcHJvcGVydHkgZnJvbSBUZWFjaGVyIGludGVyZmFjZVxuICBjb250cmFjdDogdHJ1ZSwgLy8gQWRkaXRpb25hbCBwcm9wZXJ0eSBhbGxvd2VkIGJ5IGluZGV4IHNpZ25hdHVyZVxufTtcblxuY29uc3QgZGlyZWN0b3IzOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ01pa2UnLFxuICBsYXN0TmFtZTogJ0pvaG5zb24nLFxuICBsb2NhdGlvbjogJ1BhcmlzJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIG51bWJlck9mUmVwb3J0czogOCxcbiAgZGVwYXJ0bWVudDogJ0VuZ2luZWVyaW5nJywgLy8gQWRkaXRpb25hbCBwcm9wZXJ0eVxufTtcblxuLy8gRXhhbXBsZSBmcm9tIHByZXZpb3VzIHRhc2sgKGtlcHQgZm9yIHJlZmVyZW5jZSlcbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBjb250cmFjdDogZmFsc2UsXG59O1xuXG5jb25zb2xlLmxvZygnRGlyZWN0b3IgMTonKTtcbmNvbnNvbGUubG9nKGRpcmVjdG9yMSk7XG5cbmNvbnNvbGUubG9nKCdcXG5EaXJlY3RvciAyOicpO1xuY29uc29sZS5sb2coZGlyZWN0b3IyKTtcblxuY29uc29sZS5sb2coJ1xcbkRpcmVjdG9yIDM6Jyk7XG5jb25zb2xlLmxvZyhkaXJlY3RvcjMpO1xuXG5jb25zb2xlLmxvZygnXFxuVGVhY2hlciAzIChmb3IgY29tcGFyaXNvbik6Jyk7XG5jb25zb2xlLmxvZyh0ZWFjaGVyMyk7XG5cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgRGlyZWN0b3IgaW5mb3JtYXRpb25cbmZ1bmN0aW9uIGRpc3BsYXlEaXJlY3RvcihkaXJlY3RvcjogRGlyZWN0b3JzKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKGBcXG5EaXNwbGF5aW5nIERpcmVjdG9yICR7ZGlyZWN0b3IuZmlyc3ROYW1lfSAke2RpcmVjdG9yLmxhc3ROYW1lfTpgKTtcbiAgY29uc29sZS5sb2coYExvY2F0aW9uOiAke2RpcmVjdG9yLmxvY2F0aW9ufWApO1xuICBjb25zb2xlLmxvZyhgRnVsbCBUaW1lOiAke2RpcmVjdG9yLmZ1bGxUaW1lRW1wbG95ZWV9YCk7XG4gIGNvbnNvbGUubG9nKGBOdW1iZXIgb2YgUmVwb3J0czogJHtkaXJlY3Rvci5udW1iZXJPZlJlcG9ydHN9YCk7XG4gIFxuICBpZiAoZGlyZWN0b3IueWVhcnNPZkV4cGVyaWVuY2UpIHtcbiAgICBjb25zb2xlLmxvZyhgWWVhcnMgb2YgRXhwZXJpZW5jZTogJHtkaXJlY3Rvci55ZWFyc09mRXhwZXJpZW5jZX1gKTtcbiAgfVxuICBcbiAgLy8gRGlzcGxheSBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gIGZvciAoY29uc3Qga2V5IGluIGRpcmVjdG9yKSB7XG4gICAgY29uc3Qgc3RhbmRhcmRLZXlzID0gWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAnZnVsbFRpbWVFbXBsb3llZScsICdsb2NhdGlvbicsICd5ZWFyc09mRXhwZXJpZW5jZScsICdudW1iZXJPZlJlcG9ydHMnXTtcbiAgICBpZiAoIXN0YW5kYXJkS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtrZXl9OiAke2RpcmVjdG9yW2tleV19YCk7XG4gICAgfVxuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgVGVhY2hlciBpbmZvcm1hdGlvbiAoZm9yIGNvbXBhcmlzb24pXG5mdW5jdGlvbiBkaXNwbGF5VGVhY2hlcih0ZWFjaGVyOiBUZWFjaGVyKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKGBcXG5EaXNwbGF5aW5nIFRlYWNoZXIgJHt0ZWFjaGVyLmZpcnN0TmFtZX0gJHt0ZWFjaGVyLmxhc3ROYW1lfTpgKTtcbiAgY29uc29sZS5sb2coYExvY2F0aW9uOiAke3RlYWNoZXIubG9jYXRpb259YCk7XG4gIGNvbnNvbGUubG9nKGBGdWxsIFRpbWU6ICR7dGVhY2hlci5mdWxsVGltZUVtcGxveWVlfWApO1xuICBcbiAgaWYgKHRlYWNoZXIueWVhcnNPZkV4cGVyaWVuY2UpIHtcbiAgICBjb25zb2xlLmxvZyhgWWVhcnMgb2YgRXhwZXJpZW5jZTogJHt0ZWFjaGVyLnllYXJzT2ZFeHBlcmllbmNlfWApO1xuICB9XG4gIFxuICAvLyBEaXNwbGF5IGFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXNcbiAgZm9yIChjb25zdCBrZXkgaW4gdGVhY2hlcikge1xuICAgIGNvbnN0IHN0YW5kYXJkS2V5cyA9IFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2Z1bGxUaW1lRW1wbG95ZWUnLCAnbG9jYXRpb24nLCAneWVhcnNPZkV4cGVyaWVuY2UnXTtcbiAgICBpZiAoIXN0YW5kYXJkS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3RlYWNoZXJba2V5XX1gKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRGlzcGxheSBhbGwgZGlyZWN0b3JzIGFuZCB0ZWFjaGVyc1xuY29uc29sZS5sb2coJ1xcbj09PSBEZXRhaWxlZCBJbmZvcm1hdGlvbiA9PT0nKTtcbmRpc3BsYXlEaXJlY3RvcihkaXJlY3RvcjEpO1xuZGlzcGxheURpcmVjdG9yKGRpcmVjdG9yMik7XG5kaXNwbGF5RGlyZWN0b3IoZGlyZWN0b3IzKTtcbmRpc3BsYXlUZWFjaGVyKHRlYWNoZXIzKTtcblxuLy8gVGVzdCB0aGF0IERpcmVjdG9ycyBjYW4gaGF2ZSBhbGwgVGVhY2hlciBwcm9wZXJ0aWVzXG5jb25zdCBtaXhlZERpcmVjdG9yOiBEaXJlY3RvcnMgPSB7XG4gIGZpcnN0TmFtZTogJ1NhcmFoJyxcbiAgbGFzdE5hbWU6ICdXaWxsaWFtcycsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIGxvY2F0aW9uOiAnQmVybGluJyxcbiAgbnVtYmVyT2ZSZXBvcnRzOiAxMixcbiAgLy8gQWxsIFRlYWNoZXIgcHJvcGVydGllcyB3b3JrXG4gIHllYXJzT2ZFeHBlcmllbmNlOiA4LFxuICAvLyBBZGRpdGlvbmFsIHByb3BlcnRpZXMgd29ya1xuICBjZXJ0aWZpY2F0aW9uOiBbJ1BNUCcsICdTY3J1bSBNYXN0ZXInXSxcbiAgY29udGFjdEVtYWlsOiAnc2FyYWhAZXhhbXBsZS5jb20nXG59O1xuXG5jb25zb2xlLmxvZygnXFxuTWl4ZWQgRGlyZWN0b3Igd2l0aCB2YXJpb3VzIHByb3BlcnRpZXM6Jyk7XG5jb25zb2xlLmxvZyhtaXhlZERpcmVjdG9yKTtcblxuLy8gRXhwb3J0IGludGVyZmFjZXMgYW5kIGV4YW1wbGVzIGZvciB0ZXN0aW5nXG5leHBvcnQgeyBUZWFjaGVyLCBEaXJlY3RvcnMsIHRlYWNoZXIzLCBkaXJlY3RvcjEsIGRpcmVjdG9yMiwgZGlyZWN0b3IzLCBtaXhlZERpcmVjdG9yIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9