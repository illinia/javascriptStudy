let rejectedPromise = Promise.reject(new Error('Error'));
rejectedPromise.catch(console.log);

rejectedPromise = new Promise((_, reject) => reject(new Error('Error')));
rejectedPromise.catch(console.log);