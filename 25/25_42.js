class Person {
  // 클래스 필드
  // 클래스 필드에 초기값을 할당하지 않으면 undefined를 갖는다.
  name = 'Lee';

  constructor() {
    console.log(this.name);
  }
}

new Person();