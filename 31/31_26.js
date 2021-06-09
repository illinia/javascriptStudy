const target = 'Aa Bb 12,345 _$%&';

// 알파벳, 숫자, 언더스코어, , 가 한 번 이상 반복
let regExp = /[\w,]+/g;
console.log(target.match(regExp));

regExp = /[\W,]+/g;
console.log(target.match(regExp));