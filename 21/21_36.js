const uriComp = 'name=이웅모&job=programmer&teacher';

// 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주한다.
let enc = encodeURIComponent(uriComp);
console.log(enc);

let dec = decodeURIComponent(enc);
console.log(dec);