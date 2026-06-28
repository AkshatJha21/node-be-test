// 1
// console.log('a');

// setTimeout(() => {
//     console.log('b');
// }, 0);

// console.log('c');

// 2
// console.log('a');

// setTimeout(() => {
//     console.log('b');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('c');
// });

// console.log('d');

// 3

// Promise.resolve().then(() => {
//     console.log('a');
//     Promise.resolve().then(() => console.log('b'))
// });

// console.log('c');

// 4
// setTimeout(() => console.log('a'), 0);
// setImmediate(() => console.log('b'));

// 5
// setTimeout(() => console.log('a'), 0);
// Promise.resolve().then(() => console.log('b'));
// setTimeout(() => console.log('c'), 0);
// Promise.resolve().then(() => console.log('d'));

// 6
// console.log('a');

// setTimeout(() => {
//     console.log('b');
//     Promise.resolve().then(() => {
//         console.log('c');
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('d');
//     setTimeout(() => {
//         console.log('e');
//     }, 0);
// });

// console.log('f');

// 7
// console.log('1');

// setTimeout(() => {
//     console.log('2');
//     Promise.resolve().then(() => {
//         console.log('3');
//     }).then(() => {
//         console.log('4');
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('5');
// }).then(() => {
//     console.log('6');
// });

// console.log('7');

// 8
// console.log('A');

// setTimeout(() => console.log('t1'), 0);

// Promise.resolve().then(() => {
//     console.log('p1');
//     setTimeout(() => console.log('t2'), 0);
//     return Promise.resolve().then(() => {
//         console.log('p2');
//     });
// });

// console.log('B');

// 9
// setTimeout(() => {
//     console.log('t1');
//     Promise.resolve().then(() => {
//         console.log('m1');
//         Promise.resolve().then(() => {
//             console.log('m2');
//         });
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('m3');
// });

// console.log('a');

// 10
console.log('A');

setTimeout(() => {
    console.log('t1');
    Promise.resolve().then(() => {
        console.log('p1');
    }).then(() => {
        console.log('p2');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('p3');
    setTimeout(() => {
        console.log('t2');
    }, 0);
    return Promise.resolve().then(() => {
        console.log('p4');
    });
});

console.log('B');