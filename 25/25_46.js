class Person {
  name = 'Lee';

  // 클래스 필드에 함수를 할당
  getName = function () {
    return this.name;
  }
}

const me = new Person();
console.log(me);
console.log(me.getName());