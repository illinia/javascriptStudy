const str = '   foo   ';

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.replace(/\s/g, ''));
console.log(str.replace(/^\s+/g, ''));
console.log(str.replace(/\s+$/g, ''));