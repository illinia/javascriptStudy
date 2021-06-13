const promiseGet = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// promiseGet(wrongUrl).then(
//   res => console.log(res),
//   err => console.error(err)
// );

promiseGet(wrongUrl)
  .then(res => console.log(res))
  .catch(err => console.error(err));

promiseGet(wrongUrl)
  .then(res => console.log(res))
  .then(undefined, err => console.error(err));