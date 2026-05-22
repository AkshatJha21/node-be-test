let currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
currentDate.setFullYear(2022);
console.log(currentDate);
console.log(currentDate.getTime()); // time in milliseconds since 1970

function calculateSum() {
    let a = 0;
    for (let i = 0; i < 10000000; i++) {
        a = a + i;     
    }
    return a;
}

const before = new Date();
const beforeTimeMs = before.getTime();
calculateSum();
const after = new Date();
const afterTimeMs = after.getTime();

console.log(afterTimeMs - beforeTimeMs);
