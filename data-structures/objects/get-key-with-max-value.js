const getMaxValueKey = (obj) => {
  return Object.entries(obj).reduce(
    (max, [key, value]) => (value > max[1] ? [key, value] : max),
    [null, -Infinity]
  )[0];
};

console.log(getMaxValueKey({ a: 5, b: 9, c: 2 }));
