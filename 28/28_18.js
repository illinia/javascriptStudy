console.log(Number.isNaN(NaN));
// Number.isNaN은 인수를 숫자로 암묵적 타입 변환하지 않는다.
console.log(Number.isNaN(undefined));
// isNaN은 인수를 숫자로 암묵적 타입 변환한다.
console.log(isNaN(undefined));