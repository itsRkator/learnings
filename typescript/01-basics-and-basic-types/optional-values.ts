function generateError(message?: string) {
  throw new Error(message);
}

generateError();
generateError('Error Occurred');

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'user' | 'executive' | 'guest';
};

const userWithOptionalProperty: User = {
  name: 'Rohitash',
  age: 23,
  role: 'admin',
};

const anotherUserWithOptionalProperty: User = {
  name: 'Rohitash',
  age: 23,
};

// Nullish or Coalescing operator (??) -> Just looks for null or undefined. If found, the right side value will be kept else left side value.
let input = null;
const didProvideInput = input ?? false;
