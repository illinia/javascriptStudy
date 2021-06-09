const target = 'abc#123';

console.log((/[^A-Za-z-0-9]/gi).test(target));
console.log(target.replace(/[^A-Za-z-0-9]/gi, ''))