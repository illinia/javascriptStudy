const increase = (function () {
  // 카운트 상태 변수
  let num = 0;
  // 클로저
  return function () {
    return ++num;
  };
}());

console.log(increase());
console.log(increase());
console.log(increase());