const set = new Set([1, 2, 3]);

set.delete(2);
console.log(set);

set.delete(1);
// set.delete(0).delete(2);
console.log(set);

set.clear();
console.log(set);