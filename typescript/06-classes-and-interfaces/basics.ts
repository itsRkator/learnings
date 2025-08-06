class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

console.log(new User('Rohitash Kator', 23));

// Another approach ---> shorter approach
class UserAnother {
  constructor(public name: string, public age: number) {}
}

console.log(new UserAnother('Rohitash Kator', 23));

// Making Sense of Public, Private and Read-Only keywords
class Admin {
  // Public allow to declare a variable accessible on the object created outside of this call
  // Private allow to declare a variable not accessible on the object created outside of this call
  // Read Only allow to declare a variable which can be used to read but can't be reassigned a value. Can be used with both public and private
  public readonly hobbies: string[] = [];
  constructor(public name: string, private age: number) {}

  greet() {
    this.age += 1;
    console.log('My age: ', this.age);
  }
}

const rohitash = new Admin('Rohitash Kator', 22);
rohitash.hobbies.push('Coding'); // Works as the new value is pushed but the original value is un-changed
// rohitash.hobbies = [] // Throws error as the original value is changed.
