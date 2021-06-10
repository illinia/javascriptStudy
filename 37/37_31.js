const map = new Map();
console.log(map);

map
  .set('key1', 'value1')
  .set('key2', 'value2')
  .set('key2', 'value3');
console.log(map);

map.set(NaN, 'value1').set(NaN, 'value2');
console.log(map);

map.set(0, 'value1').set(-0, 'value2');
console.log(map);