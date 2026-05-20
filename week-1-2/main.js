console.log("hello world");
// console.log(a); // error (partially runs)

let a = 1;
console.log(a);
a = "huh";
console.log(a);

let names = "aj";
let age = 22;
let ishungry = false;

console.log("this persons name is " + names + " and their age is " + age);

function needsFood(person, hunger) {
    if (hunger) {
        console.log("Give food to", person);
        return;
    }
    console.log(person, "does not need food");
    return;
}

needsFood(names, ishungry);

let sum = 0;
for (let i = 0; i <= 1000; i++) {
    sum += i;
}
console.log(sum);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) console.log(arr[i]);
}

let biggest = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
        biggest = arr[i + 1];
    } else {
        biggest = arr[i];
    }
}
console.log(biggest);

const object1 = {
    name: "aj",
    age: 22,
}

const object2 = {
    name: "rj",
    age: 34,
}

let objArr = [object1, object2, { name: "ed", age: 18 }];
console.log(objArr);

for (let i = 0; i < objArr.length; i++) {
    if (objArr[i].age > 21) {
        console.log("not a teenager");
    } else {
        console.log("teenager");
    }
}

function sumIt(n1, n2, fnToCall) {
    let result = n1+n2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is", data);
}

function displayPassiveResult(data) {
    console.log("Sum's result is", data);
}

sumIt(1, 2, displayPassiveResult);

function findIndexOf(str, target) {
    console.log("Original string:", str);
    console.log("Index:", str.indexOf(target));
    console.log("Last Index:", str.lastIndexOf(target));
}
function sliceIt(str, start, end) {
    console.log("Original string:", str);
    console.log("After slice:", str.slice(start, end))
}
findIndexOf("Hello World World", "World");
sliceIt("Hello World", 0, 7);

const str = "hellow world";
console.log(str.replace("hellow", "hey"));

const value = "hi i am a robot";
const words = value.split(" ");
console.log(words);

const val = "   aj is hungry ";
console.log(val.trim());
console.log(val.toLowerCase());

console.log(parseInt("42"));
console.log(parseInt("42px"));
console.log(parseInt("4.21"));
console.log(parseFloat("42"));
console.log(parseFloat("42px"));
console.log(parseFloat("4.21"));

const initialArr = [1, 2, 3];
const secondArr = [4, 5, 6];
initialArr.push(5);
console.log(initialArr);
initialArr.pop();
console.log(initialArr);
initialArr.shift();
console.log(initialArr);
initialArr.unshift(1);
console.log(initialArr);
const finalArr = initialArr.concat(secondArr);
console.log(finalArr);

function logThing(str) {
    console.log(str);
}
finalArr.forEach(logThing);


