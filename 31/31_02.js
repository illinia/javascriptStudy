const target = 'Is this all there is?';

// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
const regexp = /is/i;
// new RegExp(/is/i);
// new RegExp(/is/, 'i');
// new RegExp('is', 'i');

// test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언값으로 반환
console.log(regexp.test(target));