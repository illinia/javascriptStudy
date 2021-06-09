const target = 'A AA BB ZZ Aa Bb';

// A~Z가 한 번 이상 반복되는 문자열
let regExp = /[A-Z]+/g;
console.log(target.match(regExp));

// A ~ Z 또는 a ~ z가 한 번 이상 반복
regExp = /[A-Za-z]+/g;
console.log(target.match(regExp));