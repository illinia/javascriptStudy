const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map1);

const map2 = new Map([[1, 2]]);
console.log(map2);

const map3 = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map3);

const { size } = map1;
console.log(size);
console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));