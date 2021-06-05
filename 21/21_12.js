// 전역 프로퍼티는 window를 생략하고 참조할 수 있다.
console.log(globalThis.Infinity === Infinity);

console.log(3 / 0);
console.log(-3 / 0);
console.log(typeof Infinity);