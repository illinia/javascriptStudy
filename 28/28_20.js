console.log(Number.isSafeInteger(0));
console.log(Number.isSafeInteger(100000));

console.log(Number.isSafeInteger(0.5));
console.log(Number.isSafeInteger('123'));
console.log(Number.isSafeInteger(false));
console.log(Number.isSafeInteger(Infinity));