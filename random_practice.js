// for (var i = 1; i <= 3; i++) {
//     let temp = function (i) {
//         setTimeout(() => console.log(i), 100);
//     }
//     temp(i)
// }
//
// function makeArray() {
//     const arr = [];
//     let i;
//     for (i = 0; i < 3; i++) {
//         arr.push(() => console.log(i));
//     }
//     return arr;
// }
//
// let funcs = makeArray();
// funcs[0]();
// funcs[1]();
// funcs[2]();

const person = {
    name: "Bob",
    sayHi() {
        console.log("Hi", this.name);
    }
};

const f = ()=> person.sayHi();
f();         // should print "Hi Bob"
person.sayHi();

