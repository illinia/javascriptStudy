// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2);

console.log(mySymbol1.description);
console.log(mySymbol1.toString());

// 심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다.
// console.log(mySymbol1 + '');
// console.log(+mySymbol1);

console.log(!!mySymbol1);