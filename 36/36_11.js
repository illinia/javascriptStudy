const user = { firstName: 'Ungmo', lastName: 'Lee' };
const { lastName, firstName } = user;
console.log(firstName, lastName);

const { lastName: ln, firstName: fn } = user;
console.log(fn, ln);