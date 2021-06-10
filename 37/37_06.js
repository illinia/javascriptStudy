const set = new Set();
console.log(set);

set.add(1).add(2).add(2);
set.add(NaN).add(NaN);
set.add(0).add(0);
set
  .add(1)
  .add('a')
  .add(true)
  .add(undefined)
  .add(null)
  .add({})
  .add([])
  .add(() => { });
console.log(set);

console.log(set.has(2));
console.log(set.has(4));