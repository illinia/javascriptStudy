console.log(Date.now());

console.log(Date.parse('Jan 2, 1970 00:00:00 UTC'))
console.log(Date.parse('Jan 2, 1970 09:00:00'))
console.log(Date.parse('1970/01/02/09:00:00'))

console.log(Date.UTC(1970, 0, 2));
console.log(Date.UTC('1970/1/2'));