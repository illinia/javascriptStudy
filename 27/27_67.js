const arr = [1, 2, 3];

console.log(arr.slice(0, 1));

console.log(arr.slice(1, 2));

console.log(arr);

console.log(arr.slice(1));

console.log(arr.slice(-1));

console.log(arr.slice(-2));

const copy = arr.slice();
console.log(copy);
console.log(copy === arr);