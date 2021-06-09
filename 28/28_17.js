console.log(Number.isInteger(0));
console.log(Number.isInteger(123));
console.log(Number.isInteger(-123));

console.log(Number.isInteger(0.5));
// '123'을 숫자로 암묵적 타입 변환하지 않는다.
console.log(Number.isInteger('123'));
console.log(Number.isInteger(false));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));