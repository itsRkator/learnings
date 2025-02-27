const isEven = (num) => num % 2 === 0;

const isPrime = (num) => {
  if (num <= 1 || (num > 2 && num % 2 === 0)) return false; // All other even numbers aren't prime

  const squareRoot = Math.sqrt(num);

  for (let i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const filterObject = (obj, filterFn) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => filterFn(value))
  );
};

console.log(filterObject({ a: 1, b: 2, c: 3, d: 4, e: 5 }, isEven)); // { b: 2, d: 4 }
console.log(filterObject({ a: 1, b: 2, c: 3, d: 4, e: 5 }, isPrime)); // { b: 2, c: 3, e: 5 }
