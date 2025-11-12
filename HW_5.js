// function calcRectangleArea(a,b) {
//     return a * b;
// }
// console.log(calcRectangleArea(2, 3));
//
//
// function calcCircleArea(radius) {
//     return Math.PI * Math.pow(radius, 2);
// }
// console.log(calcCircleArea(2, 3));
//
// function calcCilinderArea(radius, height) {
//     return 2 * Math.PI * radius * height;
// }
// console.log(calcCilinderArea(2, 3));

// const mixedArray = [
//     3.14,
//     null,
//     ["apple", "banana", "cherry"],
//     function add(a, b) {
//         return a + b;
//     },
//     Symbol.for("shared"),
//     new Date(),
//     {title: "Book", pages: 250, authors: ["John", "Kate"]},
//     undefined,
//     BigInt(1234567890123456789n),
//     "Hello",
//     false,
//     {nested: {key: "value", flag: true}},
//     () => "Arrow function output",
//     42,
//     "World",
//     new Date("2025-01-01"),
//     999999999999999999999n,
//     0,
//     {id: 1, data: [true, false, null, "text"], meta: {created: new Date(), active: false}},
//     [1, 2, 3],
//     true,
//     Symbol("unique"),
//     {name: "Alice", age: 30},
//     -7,
//     `Interpolated ${new Date().getFullYear()}`,
//     [[10, 20], [30, 40]],
//     null,
//     function greet(name) {
//         return `Hello, ${name}!`;
//     },
//     5 > 10
// ];
//
// function showArrEntries(arr) {
//     for(let item in arr) {
//         console.log(arr[item]);
//     }
// }

// showArrEntries(mixedArray);

// function writeP(text) {
//     document.write(`
//         <p>${text}</p>
//     `)
// }
//
// writeP('hello world')

// function createList(liText) {
//     document.write(`
//     <ul>
//         <li>${liText}</li>
//         <li>${liText}</li>
//         <li>${liText}</li>
//     </ul>`)
// }
//
// createList('hi')

// function createListDynamic(text, number) {
//     document.write('<ul>')
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
//
// createListDynamic('hi', 20);

// const randomArr = [5,true, 'Nick', 10, false, 'Maggie', 'No', 778];
//
// function listFromArray (arr) {
//     document.write('<ul>')
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write('</ul>')
// }
// listFromArray(randomArr);

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28}
// ];
//
// function printUsersFromArray(array) {
//     for(let user of array) {
//         document.write(`
//         <div>
//             <p>ID: ${user.id} Name: ${user.name} Age: ${user.age}</p>
//         </div>`)
//     }
// }
//
// printUsersFromArray(usersWithId);

// let prices = [100,250,50,168,120,345,188]
// function findSmallestInArray(arr) {
//     let smallestInArray = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < smallestInArray) {
//             smallestInArray = arr[i];
//         }
//     }
//     return smallestInArray;
// }
//
// console.log(findSmallestInArray(prices));

// function sum(arr) {
//     let accumulator = 0;
//     for (let i = 0; i < arr.length; i++) {
//         accumulator += arr[i];
//     }
//     return accumulator;
// }
// console.log(sum(prices))

// function swap(arr, index1, index2) {
//     let tempValue = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = tempValue;
//     return arr;
// }
//
// console.log(swap(prices, 0, 1));

function exchange(money, currencyValues, exchangeCurrency) {
    for(let entry of currencyValues) {
        if(entry.currency.toLocaleLowerCase() === exchangeCurrency.toLocaleLowerCase()) {
            return money / entry.value;
        }
    }
    return null
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))