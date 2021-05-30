// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
}

var num = 100;
var person = { name: 'Lee' }

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num);
console.log(person);