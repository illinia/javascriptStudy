class Person {
  constructor(name) {
    this.name = name;
  }
}

const me = new Person('Lee');

// name은 public이다.
console.log(me.name);