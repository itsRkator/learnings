enum Role {
  'admin',
  'user',
  'guest',
}

let userRole: Role = 0; // Using enum via indexing
let otherUserRole: Role = Role.admin; // Using enum via Role

otherUserRole = Role.guest;

enum AnotherRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

let anotherUserRole: Role = Role.admin; // Using enum via indexing
let anotherAnotherUserRole: Role = Role.admin; // Using enum via Role

anotherUserRole = Role.guest;

// Literal Types
let color: 'red' | 'black' | 'blue' | 'green' | 'yellow' | 'purple' = 'blue';
color = 'purple';

let numbers: [1 | -1, 1 | -1];
numbers = [1, -1];

// Type alias & custom types
type Weathers = 'Summer' | 'Winter' | 'Rainy' | 'Fall';
type User = {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
};

let weather: Weathers = 'Fall';
let anotherUser: User = {
  name: 'Rohitash',
  age: 21,
  hobbies: ['Coding', 'Movies'],
  role: {
    description: 'admin',
    id: 4,
  },
};
