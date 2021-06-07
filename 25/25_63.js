class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  // 다음과 같이 암묵적으로 constructor가 정의된다.
  // constructor( ... args) { super( ... args); }
}

const derived = new Derived(1, 2);
console.log(derived);