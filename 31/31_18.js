const target = 'A AA B BB Aa Bb';

// A 또는 B를 전역 검색
let regExp = /A|B/g;

console.log(target.match(regExp));

// A 또는 B가 한 번 이상 반복되는 문자열
regExp = /A+|B+/g;

console.log(target.match(regExp));

regExp = /[AB]+/g;

console.log(target.match(regExp));