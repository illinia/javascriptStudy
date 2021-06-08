const person = (name => ({
  sayHi() { return `Hi? My name is ${name}`; }
}))('Lee');

console.log(person.sayHi());

// 화살표 함수도 일급 객체이므로 고차함수에 인수로 전달할 수 있다.
// 일반 함수 표현식보다 표현이 간결하고 가독성이 좋다.
// ES5
console.log([1, 2, 3].map(function (v) {
  return v * 2;
}))
// ES6
console.log([1, 2, 3].map(v => v * 2));