const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환한다.
// let result = arr.push(3, 4);
// console.log(result);

// arr.push(3)과 동일한 처리를 한다. 이 방법이 더 빠르다.
arr[arr.length] = 3;

console.log(arr);

// ES6 스프레드 문법
const newArr = [...arr, 3];
console.log(newArr);