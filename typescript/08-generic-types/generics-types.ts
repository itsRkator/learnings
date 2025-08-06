// Native Approach
// let names: string[] = ['John', 'Max'];
let names: Array<string> = ['John', 'Max']; // Generic Types approach

// Generic Types: Types which need to work together with other types.Building flexible type to work with multiple types.

type DataStore<T> = {
  [prop: string]: T;
};

let store: DataStore<string | boolean> = {};

store.names = 'John';
store.isDeveloper = true;

let nameStore: DataStore<string> = {};
