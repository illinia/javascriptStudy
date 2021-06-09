console.log(Number.isFinite(0));
console.log(Number.isFinite(Number.MAX_VALUE));
console.log(Number.isFinite(Number.MIN_VALUE));

console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));

console.log(Number.isFinite(NaN));

// Number.isFinite는 인수를 숫자로 암묵적 타입 변환하지 않는다.
console.log(Number.isFinite(null));
// isFinite는 인수를 숫자로 암묵적 타입 변환한다. null은 0으로 암묵적 타입 변환한다.
console.log(isFinite(null));