const person = {
  name: 'Lee',
  // sayHi 프로퍼티에 할당된 화살표 함수 내부의 this는 상위 스코프인 전역의 this가 가리키는
  // 전역 객체를 가리킨다
  // sayHi: () => console.log(`Hi ${this.name}`)

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
};

person.sayHi();