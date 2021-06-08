const obj = {
  x: 1,
  // foo는 메서드다.
  foo() { return this.x; },
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
  bar: function () { return this.x; }
};

console.log(obj.foo());
console.log(obj.bar());

// new obj.foo();
new obj.bar();

// obj.foo는 constructor가 아닌 ES6 메서드이므로 prototype 프로퍼티가 없다.
console.log(obj.foo.hasOwnProperty('prototype'));

// obj.bar는 constructor인 일반 함수이므로 prototype 프로퍼티가 있다.
console.log(obj.bar.hasOwnProperty('prototype'));