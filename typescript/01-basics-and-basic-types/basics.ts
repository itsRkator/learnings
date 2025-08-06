let username: string; // Type Assignment
let userAge = 27; // Type inference

username = 'Rohitash';
// userAge = '24'

function addNumbers(a: number, b = 1) {
  return a + b;
}

addNumbers(3);
addNumbers(3, 4);
