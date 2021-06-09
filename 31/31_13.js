const target = 'A AA B BB Aa Bb AAA';

// A가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
let regExp = /A{1,2}/g;

console.log(target.match(regExp));

// 'A'가 2번 반복
regExp = /A{2}/g;

console.log(target.match(regExp));

// A가 최소 2번 이상 반복
regExp = /A{2,}/g;

console.log(target.match(regExp));

// A가 최소 한번이상 반복
regExp = /A+/g;

console.log(target.match(regExp));