// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고
// 아니면 좌항의 피연산자를 반환한다.
var foo = null ?? 'default';
console.log(foo);