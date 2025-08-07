type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  readonly multiply: (a: number, b: number) => number; // Makes property read only, can't be over ride
  divide?: (a: number, b: number) => number;
};

type Results<T extends object> = {
  [K in keyof T]: number; // Pull all the properties as they are
  // [K in keyof T]?: number; // Makes all the properties optional
  // [K in keyof T]-?: number; // Makes all the properties mandatory (Removing optional flag)
  // readonly [K in keyof T]-?: number; // Makes all the properties read only
  // -readonly [K in keyof T]-?: number; // Make all the properties over ridable (Removes readonly flag)
};

let mathOperations: Operations = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(2, 3),
  subtract: mathOperations.subtract(4, 1),
  multiply: mathOperations.multiply(5, 4),
  divide: mathOperations.divide && mathOperations.divide(2, 1),
};
