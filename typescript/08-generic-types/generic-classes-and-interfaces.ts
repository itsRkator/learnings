interface Role<T> {
  // Interface with a generic type T
}

class User<T> {
  constructor(public id: T) {}
}

const user = new User('i1');
