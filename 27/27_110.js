const numbers = [1, 2, 3, 4, 5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
const odds = numbers.filter(item => item % 2);
console.log(odds);