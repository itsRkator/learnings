type StringArray = string[];

// Getting type of a single element of an array
// type ElementType<T extends any[]> = T[number];
// type Example1 = ElementType<StringArray>;

const text = 'hello';
const num = 2;

// type Example2 = ElementType<typeof text>

type GetElementType<T> = T extends any[] ? T[number] : never;

type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;
type Example3 = GetElementType<typeof num>;

type FullNamePerson = { firstName: string; lastName: string };
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
  }

  throw new Error('No first name and / or last name found');
}

const name1 = getFullName({});
const name2 = getFullName({ firstName: 'Rohitash', lastName: 'Kator' });
