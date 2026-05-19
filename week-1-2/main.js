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

