function sum() {
  return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3));

const sum1 = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum1(1, 2, 3));