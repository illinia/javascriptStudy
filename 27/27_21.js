// 전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성한다.
const arr = new Array(10);

console.log(arr);
console.log(arr.length);

// 이때 생성된 배열은 희소 배열이다.
console.log(Object.getOwnPropertyDescriptors(arr));

// 인수가 최대 갯수보다 크거나 음수이면 에러가 발생한다.
// 전달된 인수가 없는 경우 빈 배열을 생성한다. 배열 리터럴 []과 같다.
new Array(); // []

// 전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성한다.
new Array(1, 2, 3);

// 전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성한다.
new Array({});