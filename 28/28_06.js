function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));

console.log(Number.MAX_VALUE);
console.log(Infinity > Number.MAX_VALUE);

console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE > 0);