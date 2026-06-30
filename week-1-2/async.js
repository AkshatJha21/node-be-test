function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    console.log(findSum(100));
}

setTimeout(findSumTill100, 2000);
console.log("hello");

const fs = require("fs");

function readMyFile() {
    console.log('Wait for file read...');
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", (err, data) => {
            resolve(data);
        });
    });
}

console.log('Before onDone');
async function onDone() {
    let value = await readMyFile();
    console.log(value);
}

onDone();
console.log('After onDone');