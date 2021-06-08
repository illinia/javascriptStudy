const arr = [1, 2, 3];

console.log(arr.includes(2));

console.log(arr.includes(100));

console.log(arr.includes(1, 1));
// 인덱스 2(arr.length - 1)부터 확인한다.
console.log(arr.includes(3, -1));