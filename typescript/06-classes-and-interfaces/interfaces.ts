interface Authenticatable {
  email: string;
  password: string;
  login(): void;
  logout(): void;

  // Alternative
  // login: () => void;
  // logout: () => void;
}

// Extending an interface
interface AuthenticatableAdmin extends Authenticatable {
  role: 'admin' | 'super-admin';
}

// Declaration merging
interface Authenticatable {
  phone: string;
}

let authenticatableUser: Authenticatable;

authenticatableUser = {
  email: 'test@test.com',
  password: 'test Password',
  phone: '98766543422',
  login() {},
  logout() {},
};

// Type vs Interface
// 1. Interfaces have declaration merging but types don't
// 2. Types can't be implemented on classes but interfaces can be imposed
// 3. Interfaces supports inheritance but types don't not.

class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public phone: string,
    public address: string
  ) {}

  login(): void {}

  logout(): void {}
}

// Ensuring the Base type using interface (Also can be achieved using types too)
function authenticate(user: Authenticatable) {}
