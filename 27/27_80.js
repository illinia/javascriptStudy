const arr = new Array(3);
console.log(arr);

const result = arr.fill(1);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr);
// fill 메서드는 변경된 원본 배열을 반환한다.
console.log(result);