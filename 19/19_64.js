const person = {
  name: 'Lee',
  address: 'Seoul'
};

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log('toString' in person);

for (const key in person) {
  console.log(key + ': ' + person[key]);
}

console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));