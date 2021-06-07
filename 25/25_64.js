class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  constructor(a, b, c) {
    // 서브 클래스에서 constructor를 생략하지 않은 경우 반드시 super를 호출해야 한다.
    super(a, b);
    // super를 호출하기 전에는 this를 참조할 수 없다.
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
console.log(derived);