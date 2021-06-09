const arr = [...[1, 2], ...[3, 4]];
console.log(arr);

const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1);