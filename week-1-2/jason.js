const users = '{"name": "ajk", "age": 24, "gender": "male"}';

console.log(JSON.parse(users));

const obj = {name: "ajk", age: 24, gender: "male"};
const str = JSON.stringify(obj);
console.log(str);

let keys = Object.keys(obj);
console.log(keys);
let vals = Object.values(obj);
console.log(vals);
let entries = Object.entries(obj);
console.log(entries);
let hasProp = obj.hasOwnProperty("name");
console.log(hasProp);
let newObj = Object.assign({}, obj, { newProperty: "hello" });
console.log(newObj);

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfPowers(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

console.log(sumOfPowers(1, 2, n => n * n));
console.log(sumOfPowers(1, 2, (n) => { return n * n * n}));