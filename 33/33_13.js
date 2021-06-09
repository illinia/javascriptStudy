const obj = {
  [Symbol('mySymbol')]: 1
};

for (const key in obj) {
  console.log(key);
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

console.log(Object.getOwnPropertySymbols(obj));

const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey1]);