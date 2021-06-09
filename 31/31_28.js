const target = 'https://poiemaweb.com';

let regExp = /^https/;
console.log(regExp.test(target));

regExp = /com$/;
console.log(regExp.test(target));