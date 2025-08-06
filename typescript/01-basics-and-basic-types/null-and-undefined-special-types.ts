// null and undefined types are helpful when using union types to clear or reset the stored data
let a: undefined | null | string; // only holds the null value only

a = 'Hello World!';
a = null;

// undefined type means the variable is declared but not assigned
// null type means that the variable is assigned some values and cleared at a later time.
