class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const me = new Person('Ungmo', 'Lee');

me.fullName = 'Heegun Lee';
console.log(me);

console.log(me.fullName);

console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));