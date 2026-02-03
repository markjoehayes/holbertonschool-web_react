// Define RowID type
type RowID = number;

// Define RowElement interface
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// Export types
export { RowID, RowElement };
