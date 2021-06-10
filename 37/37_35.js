const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map
  .set(lee, 'developer')
  .set(kim, 'designer');

console.log(map.get(lee));
console.log(map.get('key'));

console.log(map.has(lee));
console.log(map.has('key'));

console.log(map.delete(kim));
console.log(map.delete('key2'));
console.log(map);

map.clear();
console.log(map);