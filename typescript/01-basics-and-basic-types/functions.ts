function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

// never return type which means this function will never complete, finish or return
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

// Function as type
function performJob(cb: Function) {
  cb();
}

performJob(() => console.log('Job done!'));

// different kind of function types
// () => void, neither takes any parameters nor returns any value or returns void
// (parameter1, parameter2,...) => void, takes parameters but not returns any value or returns void
// () => number, doesn't take parameters but returns value

function performAnotherJob(cb: (message: string) => void) {
  cb('Job finished!');
}

performAnotherJob(log);

type UserType = {
  name: string;
  age: number;
  greet: () => string;
};

let user: UserType = {
  name: 'Rohitash',
  age: 19,
  greet() {
    return this.name;
  },
};

let anotherUser: UserType = {
  name: 'Rohitash',
  age: 19,
  greet: () => {
    return 'name';
  },
};
