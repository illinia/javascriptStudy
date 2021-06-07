class Person {
  constructor(name) {
    // 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this);
    console.log(Object.getPrototypeOf(this) === Person.prototype);

    // this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.name = name;

    // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }
}