// 유사 배열 객체를 변환하여 배열을 생성한다.
console.log(Array.from({ length: 2, 0: 'a', 1: 'b' }));

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
console.log(Array.from('Hello'));

// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
console.log(Array.from({ length: 3 }));

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
console.log(Array.from({ length: 3 }, (_, i) => i));