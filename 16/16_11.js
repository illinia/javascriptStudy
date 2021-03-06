const person = { name: 'Lee' };

console.log(Object.isSealed(person));

// person 객체를 밀봉(seal)하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person);

console.log(Object.isSealed(person));

// seal된 객체는 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person));

// 프로퍼티 추가 금지
person.age = 20;
console.log(person);

// 프로퍼티 삭제 금지
delete person.name;
console.log(person);

// 프로퍼티 값 갱신은 가능하다.
person.name = 'Kim';
console.log(person);

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', { configurable: true });