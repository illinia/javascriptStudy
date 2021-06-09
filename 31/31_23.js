const target = 'AA BB 12,345';

// 0 ~ 9 가 한 번 이상 반복되는 문자열
let regExp = /[0-9]+/g;
console.log(target.match(regExp));

regExp = /[0-9,]+/g;
console.log(target.match(regExp));

regExp = /[\d,]+/g;
console.log(target.match(regExp));

regExp = /[\D,]+/g;
console.log(target.match(regExp));