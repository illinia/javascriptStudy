class Person {
  // construcotr는 생략하면 아래와 같이 빈 constructor가 암묵적으로 정의된다.
  constructor() {
    this.name = 'Lee';
    this.address = 'Seoul';
  }
}

// 인스턴스 프로퍼티가 추가된다.
const me = new Person();
console.log(me);