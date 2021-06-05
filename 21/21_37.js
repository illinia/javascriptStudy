// 전역 변수 x는 호이스팅이 발생한다.
console.log(x);
// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않는다.
// console.log(y);

// 전역변수
var x = 10;

function foo() {
  // 선언하지 않은 식별자에 값을 할당
  y = 20; // globalThis.y = 20;
}
foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(x + y);

// console.log(window.x);
console.log(globalThis.y);

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(globalThis.y);