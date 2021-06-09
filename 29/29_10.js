console.log(Math.max(1));
console.log(Math.max(1, 2));
console.log(Math.max(1, 2, 3));
console.log(Math.max());

console.log(Math.max.apply(null, [1, 2, 3]));
console.log(Math.max(...[1, 2, 3]));

console.log(Math.min(1));
console.log(Math.min(1, 2));
console.log(Math.min(1, 2, 3));
console.log(Math.min());

console.log(Math.min.apply(null, [1, 2, 3]));
console.log(Math.min(...[1, 2, 3]));