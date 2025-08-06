class AnotherUser {
  // Protected allows access to the variable in the inherited class but not on the instantiated object
  constructor(protected name: string, private age: number) {}
}

class Employee extends AnotherUser {
  constructor(
    name: string,
    age: number,
    public designation: string,
    public department: string
  ) {
    super(name, age);
  }

  work() {
    console.log(this.name);
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }

  clone(targetLocation: string): void {}
}
