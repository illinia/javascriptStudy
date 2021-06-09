const str = 'Hello World';

console.log(str.indexOf('l'));

console.log(str.indexOf('or'));

console.log(str.indexOf('x'));

console.log(str.indexOf('l', 3));

if (str.indexOf('Hello') !== -1) {
  // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}

if (str.includes('Hello')) {
  // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}

console.log(str.search(/o/));
console.log(str.search(/x/));

console.log(str.includes('Hello'));
console.log(str.includes(''));
console.log(str.includes('x'));
console.log(str.includes());

console.log(str.includes('l', 3));
console.log(str.includes('H', 3));

console.log(str.startsWith('He'));
console.log(str.startsWith('x'));

console.log(str.startsWith(' ', 5));

console.log(str.endsWith('ld'));
console.log(str.endsWith('x'));

console.log(str.endsWith('lo', 5));