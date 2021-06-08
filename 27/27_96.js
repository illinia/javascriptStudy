const numbers = [1, 2, 3];
const pows = [];

numbers.forEach(item => pows.push(item ** 2));
console.log(pows);

[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});

const result = numbers.forEach((item, index, arr) => { arr[index] = item ** 2; });
console.log(numbers);
console.log(result);