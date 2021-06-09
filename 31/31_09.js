const target = 'Is this all there is?';

// 플러그 생략되었으므로 대소문자 구별
const regExp = /is/;
const regExp1 = /is/i;
const regExp2 = /is/ig;
// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색한다.
const regExp3 = /.../g;

console.log(regExp.test(target));

console.log(target.match(regExp));

console.log(target.match(regExp1));

console.log(target.match(regExp2));

console.log(target.match(regExp3));