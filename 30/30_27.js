const today = new Date('2020/07/24/12:30');

console.log(today.toString());
console.log(today.toISOString());
console.log(today.toISOString().slice(0, 10));
console.log(today.toISOString().slice(0, 10).replace(/-/g, ''));

console.log(today.toDateString());
console.log(today.toTimeString());