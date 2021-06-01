// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || '';
  console.log(str.length);
}

getStringLength();
getStringLength('hi');

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
  console.log(str.length);
}

getStringLength();
getStringLength('hi');