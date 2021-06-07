class Person {
  // private 필드 정의, 반드시 클래스 몸체에 정의해야 한다.
  #name = '';

  constructor(name) {
    // private 필드 참조
    this.#name = name;
  }

  get name() {
    return this.#name.trim();
  }
}

const me = new Person('Lee');

// private 필드 #name은 클래스 외부에서 참조할 수 없다.
// console.log(me.#name);

console.log(me.name);