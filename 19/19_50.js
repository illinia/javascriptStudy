const Person = (function () {
  function Person(name) {
    this.name = name;
  }
  // 생성자 함수의 prototype 프로퍼티를 통해 포로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };
  return Person;
}());

const me = new Person('Lee');

// constructor 프로퍼티와 생성자 함수 간의 연결이 파괴되어도 instanceof는 아무런 영향을 받지 않는다.
console.log(me.constructor === Person);

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Person);
// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object);