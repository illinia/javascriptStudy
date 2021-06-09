const target = 'color colour';

// colo 다음 u가 최대 한 번 이상 반복되고 r이 이어짐
let regExp = /colou?r/g;

console.log(target.match(regExp));