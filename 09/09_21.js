var done = false;
var message = '';

// done이 false라면 message에 미완료를 할당
message = done || '미완료';
console.log(message);