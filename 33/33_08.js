const s1 = Symbol.for('mySymbol');

console.log(Symbol.keyFor(s1));

const s2 = Symbol('foo');

console.log(Symbol.keyFor(s2));