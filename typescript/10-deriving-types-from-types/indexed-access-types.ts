type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser['permissions']; // Accessing types of key of an object
type Perm = Perms[number]; // Accessing type of an element of an Array

type Names = string[];
type Name = Names[number];
