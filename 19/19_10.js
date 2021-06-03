const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj);
console.log(obj);

// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent);

console.log(obj.x);