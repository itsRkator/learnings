// Type Narrowing
// const inputElement = document.getElementById('user-name');
// if (!inputElement) {
//   throw new Error('Element not found!');
// }
// console.log(inputElement.value);

// Forced not null
// const inputElement = document.getElementById('user-name')!; // Be careful while using ! for forcing not null
// console.log(inputElement.value);

// Optional Chaining
// const inputElement = document.getElementById('user-name');
// console.log(inputElement?.value);

// Type Casting or assertion
const inputElement = document.getElementById(
  'user-name'
) as HTMLInputElement | null;
console.log(inputElement?.value);
