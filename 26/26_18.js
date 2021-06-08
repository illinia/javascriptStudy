// 객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호로 감싸 주어야 한다.
// 감싸지 않으면 객체 리터럴의 중괄호를 함수 몸체를 감싸는 중활호로 잘못 해석한다.
const create = (id, content) => ({ id, content });
console.log(create(1, 'JavaScript'));