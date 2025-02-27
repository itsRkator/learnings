const swapKeyValuesInPlace = (obj) => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (!obj.hasOwnProperty(value)) {
      // Ensure that we don't overwrite an existing key-value pair
      obj[value] = key;
      delete obj[key];
    }
  });

  return obj;
};

const swapKeyValues = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
};

console.log(swapKeyValues({ a: 1, b: 2, c: 3 }));
