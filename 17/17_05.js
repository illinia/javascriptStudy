function foo() {
  console.log(this);
}

// foo();

const obj = { foo };
// 메서드로서 호출
obj.foo();

// 생성자 함수로서 호출
const inst = new foo();