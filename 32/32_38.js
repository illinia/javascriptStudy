const str = 'How are you doing';

console.log(str.split(' '));
console.log(str.split(/\s/));
console.log(str.split(''));
console.log(str.split());

console.log(str.split(' ', 3));

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello world!'));