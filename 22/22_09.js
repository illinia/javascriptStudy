// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;

// const 키워드로 선언한 전역변수는 전역 객체의 프로퍼티가 아니다.

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this);
    console.log("foo's this.value: ", this.value);

    function bar() {
      console.log("bars this: ", this);
      console.log("bar's this.value: ", this.value);
    }

    bar();
  }
};

obj.foo();