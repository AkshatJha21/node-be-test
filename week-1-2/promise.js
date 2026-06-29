let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});

checkEven
    .then((message) => console.log("1", message))
    .catch((error) => console.error("this is error", error));

// waits for all to fulfill and return results, returns error if any one fails
Promise.all([
    Promise.resolve('Task 1 done'),
    Promise.resolve('Task 2 done'),
    Promise.reject('Task 3 failed'),
])
    .then((results) => console.log("2", results))
    .catch((error) => console.error('Error: ', error));

// waits for all the SETTLE and returns object array describing outcome of each promise
Promise.allSettled([
    Promise.resolve('Task 1 done'),
    Promise.reject('Task 2 failed'),
    Promise.resolve('Task 3 done'),
])
    .then((results) => console.log("3", results))
    .catch((error) => console.error('Error: ', error));

// returns the first promise that settles (resolved/rejected)
Promise.race([
    new Promise((res) => setTimeout(() => res("Task 1 finished"), 1000)),
    new Promise((res) => setTimeout(() => res("Task 2 finished"), 500))
])
    .then((results) => console.log("4", results))
    .catch((err) => console.error(err));

// returns first promise that gets fulfilled
Promise.any([
    Promise.reject('Task 1 failed'),
    Promise.resolve('Task 2 done'),
    Promise.resolve('Task 3 done'),
])
    .then((results) => console.log("5", results))
    .catch((err) => console.error(err));