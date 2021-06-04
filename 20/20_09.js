(function () {
  'use strict';
  // delete 연산자로 변수, 함수, 매개변수를 삭제할시
  var x = 1;
  delete x;

  function foo(a) {
    delete a;
  }
  delete foo;
})