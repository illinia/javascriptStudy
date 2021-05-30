const person = {
  // 데이터 프로퍼티
  firstName: 'Ungmo',
  lastName: 'Lee',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter 함수
  set fullName(name) {
    // 배열 디스트릭처링 할당
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통하나 프로퍼티 값의 참조.
console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'Heegun Lee';
console.log(person)

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.fullName);

// firstName은 데이터 프로퍼티다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

// fullName은 접근자 프로퍼티다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);