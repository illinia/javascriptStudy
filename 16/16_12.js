const person = { name: 'Lee' };

console.log(Object.isFrozen(person));

// person 객체를 동결(freeze)하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
Object.freeze(person);

console.log(Object.isFrozen(person));

// freeze된 객체를 writable과 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person));

// 프로퍼티 추가가 금지된다.
person.age = 20;
console.log(person);

// 프로퍼티 삭제가 금지된다.
delete person.name;
console.log(person);

// 프로퍼티 값 갱신이 금지된다.
person.name = 'Kim';
console.log(person);

Object.defineProperty(person, 'name', { configurable: true });