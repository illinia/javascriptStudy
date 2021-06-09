const str = 'Hello World';

console.log(str.substring(1, 4));

console.log(str.substring(1));

console.log(str.substring(4, 1));

console.log(str.substring(-2));

console.log(str.substring(1, 100));

console.log(str.substring(20));

console.log(str.substring(0, str.indexOf(' ')));

console.log(str.substring(str.indexOf(' ') + 1, str.length));