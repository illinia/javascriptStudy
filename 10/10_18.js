var person = {
  name: 'Lee'
};

person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 삭제할 수 없다. 에러는 발생하지 않는다.
delete person.address;

console.log(person);