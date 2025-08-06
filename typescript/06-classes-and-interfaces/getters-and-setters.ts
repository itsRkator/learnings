class UserClass {
  private firstName: string = '';
  private lastName: string = '';

  // constructor(private firstName: string, private lastName: string) {}

  // Setters
  set setFirstName(firstName: string) {
    if (firstName.trim() === '') {
      throw new Error('Invalid first name.');
    }
    this.firstName = firstName;
  }

  set setLastName(lastName: string) {
    if (lastName.trim() === '') {
      throw new Error('Invalid last name.');
    }
    this.lastName = lastName;
  }

  // Getter
  get getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const user = new UserClass();

user.setFirstName = 'Rohitash';
user.setLastName = 'Kator';

console.log(user.getFullName);
