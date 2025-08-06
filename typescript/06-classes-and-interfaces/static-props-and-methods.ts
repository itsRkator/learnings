class StaticClass {
  // Static Properties allows us to access properties without instance
  static uid = 'U12345';

  static greet() {
    console.log('Hello there!');
  }
}

console.log(StaticClass.uid);
StaticClass.greet();
