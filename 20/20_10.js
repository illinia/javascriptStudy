(function () {
  'use strict';
  // 중복된 매개변수 이름을 사용할시
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2))
}())