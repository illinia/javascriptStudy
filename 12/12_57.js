var count = 0;

function increase() {
  return ++count; // 외부 상태에 의존하여 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추척하기 어려워진다.
increase();
console.log(count);

increase();
console.log(count);