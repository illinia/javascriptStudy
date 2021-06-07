class Person {
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me = new Person('Lee');
me.sayHi();

// me 객체의 프로토타입은 Person.prototype이다.
console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(me instanceof Person);

// Person.prototype의 프로토타입은 Object.prototype이다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(me instanceof Object);

// me 객체의 constructor는 Person 클래스다.
console.log(me.constructor === Person);