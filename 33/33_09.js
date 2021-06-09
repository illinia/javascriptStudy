// const Direction = {
//   UP: 1,
//   DOWN: 2,
//   LEFT: 3,
//   RIGHT: 4
// };
const Direction = {
  UP: Symbol('up'),
  DOWN: Symbol('down'),
  LEFT: Symbol('left'),
  RIGHT: Symbol('right')
};

const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
  console.log('You are goin UP');
}