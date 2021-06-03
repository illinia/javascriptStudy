// 화살표 함수는 non-constructor다.
const Person = name => {
  this.name = name;
}

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype'));

// 프로토타입을 생성하지 않는다.
console.log(Person.prototype);

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor다.
const obj = {
  foo() { }
};

// prototype 프로퍼티를 소유하지 않는다.
console.log(obj.foo.hasOwnProperty('prototype'));

// 프로포타입을 생성하지 않는다.
console.log(obj.foo.prototype);