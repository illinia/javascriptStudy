function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달한다.
repeat(5, logOdds);