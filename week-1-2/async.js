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

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
});

console.log("hello hello again");