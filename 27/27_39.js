const arr = [1, 2, 3];

// 배열 요소의 삭제
delete arr[1];
console.log(arr);

// length 프로퍼티에 영향을 주지 않는다.
console.log(arr.length);