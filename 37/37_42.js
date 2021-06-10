const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map
  .set(lee, 'developer')
  .set(kim, 'designer');

map.forEach((v, k, map) => console.log(v, k, map));

console.log(Symbol.iterator in map);

for (const entry of map) {
  console.log(entry);
}

console.log([...map]);

const [a, b] = map;
console.log(a, b);

for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) {
  console.log(value);
}

for (const entry of map.entries()) {
  console.log(entry);
}