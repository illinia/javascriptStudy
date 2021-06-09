console.log((77.1234).toExponential());
console.log((77.1234).toExponential(4));
console.log((77.1234).toExponential(2));

// 숫자 리터럴과 함께 Number 프로토타입 메서드를 사용할 경우 에러가 발생한다.
// 77.toExponential();

// 첫 번째 .뒤에 숫자가 이어지므로 두 번째 .은 프로퍼티 접근 연산자로 해석된다.
// 숫자 리터럴과 함께 메서드를 사용할 경우 그룹 연산자를 사용할 것을 권장한다.
console.log(77.1234.toExponential());