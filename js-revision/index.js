console.log('Hello warriors');

let a = 10;
const b = 20;
var c = 30;

a = 20;
// b = 30;
c = 40;

console.log(a) // 20
console.log(b) // 20 (reassign not allowed)
console.log(c) // 40

let num = 1;
let str = "hello";
let bool = false;
let nada = null;
let undef;
let obj = { a: 1 };
let arr = [1, 2, 3];

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof nada);
console.log(typeof undef);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof null);
console.log(typeof undefined);

function add(a, b) {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
}

const subtract = (a, b) => a - b;

console.log(add(5,2))
console.log(multiply(5,2))
console.log(subtract(5,2))

const isEven = (n) => {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEven(5));
console.log(isEven(0));

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

let nums = [1, 3, 2];

nums.push(4);
nums.map(n => n * 2);
nums.filter(n => n > 1);
nums.reduce((a, b) => a + b, 0);

console.log(nums.toString());
console.log(nums.length, nums.sort());

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

nums.forEach((i) => {
    console.log(i + 10);
})

console.log(typeof nums);
console.log(Array.isArray(nums));
console.log(nums.at(1));
console.log(nums.join('+'));
console.log(nums.pop());
nums.push(5);
console.log(nums);
nums.shift();
console.log(nums);
nums.unshift(1);
console.log(nums, nums.unshift());

const numss = [10, 11, 12];
const numss2 = [20, 21, 22];
console.log(nums.concat(numss, numss2, "huh"));

console.log(nums.copyWithin(1, 0, 2));

const arr2d = [[1,2], [2,3], [3,4]];
console.log(arr2d.flat());

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Chiku", "Anaar");
fruits.splice(0, 1);
console.log(fruits);

console.log(fruits.slice(0, fruits.length - 1));

const phal = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(phal.indexOf("Apple") + 1);
console.log(phal.lastIndexOf("Apple") + 1);
console.log(phal.includes("Mango"))

console.log(numss2.find(isEven));
console.log(numss2.findIndex(isEven));
console.log(numss2.findLast(isEven));
console.log(numss2.findLastIndex(isEven));

const isMax = (arr) => {
    return Math.max.apply(null, arr);
}
const isMin = (arr) => {
    return Math.min.apply(null, arr);
}

console.log(isMax(numss));
console.log(isMin(numss));
console.log(numss.map(v => v * 2));
console.log(numss.filter(isEven));
console.log(numss.reduce((n, total = 0) => n + total));
console.log(numss.every(n => n > 10));
console.log(numss.some(n => n > 10));
const mynum = Array.from(numss2, x => x * 2);
console.log(mynum);
const f = fruits.entries();
for (let x of f) {
    console.log("I ate ", x[0]);
}
console.log([...numss, ...numss2]);

// sets
const letters = new Set();
letters.add('a');
letters.add('b');
letters.add('c');
letters.add('c');
letters.add('d');
letters.add('d');

console.log(letters);
console.log(typeof letters);

for (const x of letters) {
    console.log(x);
}
console.log(letters.size)
console.log(letters.has("c"));
console.log(letters.has("e"));

let text = "";
for (const x of letters.keys()) {
  text += x;
}