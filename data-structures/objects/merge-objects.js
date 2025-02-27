const mergeObjects = (object1, object2) => {
  const mergedObject = { ...object1 };

  for (const key in object2) {
    mergedObject[key] = (mergedObject[key] || 0) + object2[key];
  }
  return mergedObject;
};

console.log(
  mergeObjects({ a: 1, b: 2, c: 3, f: 15 }, { b: 3, c: 4, d: 5, e: 10 })
);
