function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge<number, string>(1, 'Rohitash');

function mergeObj<T extends object, U extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: 'John' }, { age: 35 });
