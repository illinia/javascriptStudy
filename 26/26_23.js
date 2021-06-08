const Foo = () => { };
// 화살표 함수는 생성자 함수로서 호출할 수 없다.(non-constructor)
// new Foo();
// prototype 프로퍼티가 없다.
console.log(Foo.hasOwnProperty('prototype'));

// 일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않는다.
// strict mode에서는 에러가 발생한다.
function normal(a, a) { return a + a; }
console.log(normal(1, 2));

// 화살표 함수에서도 에러가 발생한다.
const arrow = (a, a) => a + a;