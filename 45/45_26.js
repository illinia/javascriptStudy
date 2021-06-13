let resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log);

resolvedPromise = new Promise(resolve => resolve([1, 2, 3]))
resolvedPromise.then(console.log);