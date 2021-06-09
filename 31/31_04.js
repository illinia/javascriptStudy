const target = 'Is this all there is?';
const regExp = /is/;
const regExp2 = /is/g;

console.log(regExp.exec(target));
console.log(regExp.test(target));
console.log(target.match(regExp));
console.log(target.match(regExp2));