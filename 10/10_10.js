// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 덮어쓴다. 에러 없음.
var foo = {
  name: 'Lee',
  name: 'Kim'
};

console.log(foo);