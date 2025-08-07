const userName = 'Alice';

console.log(typeof userName); // "string"

type UserName = typeof userName;

const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['John', 'Jane', 'Ribecca'],
};

// Not a best practice as it is error prone
// type Settings = {
//   difficulty: string;
//   minLevel: number;
//   didStart: boolean;
//   players: string[];
// };

type Settings = typeof settings;

// function loadData(settings: Settings) {} // An alternative
function loadData(s: typeof settings) {
  // ...
}

loadData(settings);
