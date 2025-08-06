// Array Types
let hobbies = ['Sports', 'Cookings']; // Type inference

// Illegal assignment
// hobbies.push(12);

// Multiple approaches
// let users: (string | number)[]; // Explicit type assignment
let users: Array<string | number>; // Explicit type assignment (Generic Types)
users = [1, 'Rohitash'];
users = [2, 4];
users = ['Rohitash', 'Mannu'];

// Tuples Types
let possibleResults: [number, number]; // Can hold [-1, 1] (Fixed length array)
possibleResults = [1, -1];

let possibleActions: [number, string]; // Can hold [-1, 1]
possibleActions = [5, '3'];

// Object Types
let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: 'Rohitash',
  age: 21,
  hobbies: ['Coding', 'Movies'],
  role: {
    description: 'admin',
    id: 4,
  },
};

let val: {} = 'Some text'; // Any non null and non undefined values
val = 3;
val = true;
val = {};
val = [];

let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: '2',
  1: 1,
};
