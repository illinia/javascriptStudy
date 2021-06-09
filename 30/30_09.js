console.log(new Date('2020/07/24').getFullYear());

const today = new Date();

today.setFullYear(2000);
console.log(today.getFullYear());

today.setFullYear(1900, 0, 1);
console.log(today.getFullYear());

console.log(new Date('2020/07/24').getMonth());

today.setMonth(0);
console.log(today.getMonth());

today.setMonth(11, 1);
console.log(today.getMonth());

console.log(new Date('2020/07/24').getDate());

today.setDate(1);
console.log(today.getDate());

console.log(new Date('2020/07/24').getDay());

console.log(new Date('2020/07/24/12:00').getHours());

today.setHours(7);
console.log(today.getHours());

today.setHours(0, 0, 0, 0);
console.log(today.getHours());

console.log(new Date('2020/07/24/12:30').getMinutes());

today.setMinutes(50);
console.log(today.getMinutes());

today.setMinutes(5, 10, 999);
console.log(today.getMinutes());

console.log(new Date('2020/07/24/12:30:10').getSeconds());

today.setSeconds(30);
console.log(today.getSeconds());

today.setSeconds(10, 0);
console.log(today.getSeconds());

console.log(new Date('2020/07/23/12:30:10:150').getMilliseconds());

today.setMilliseconds(123);
console.log(today.getMilliseconds());

console.log(new Date('2020/07/24/12:30').getTime());

today.setTime(86400000);
console.log(today);