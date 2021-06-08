const arr = [0];

// 배열 요소의 추가
arr[1] = 1;

console.log(arr);
console.log(arr.length);

arr[100] = 100;

console.log(arr);
console.log(arr.length);

console.log(Object.getOwnPropertyDescriptors(arr));

// 요소값의 갱신
arr[1] = 10;

console.log(arr);