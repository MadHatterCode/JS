// // #4aDbSgh
// let emptyArr =  [];
// let entriesNum = 12;
//
// for (let i = 0; i <= entriesNum; i++) {
//     emptyArr[i] = i;
// }
// console.log(emptyArr);

// #qLQLJSeN7i

let rdnArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < rdnArr.length) {
//     if (rdnArr[i] % 2 === 0) {
//         console.log(rdnArr[i]);
//     }
//     i ++;
// }

// for (i = 0; i < rdnArr.length; i++ ) {
//     if (rdnArr[i] % 3 === 0) {
//         console.log(rdnArr[i])
//         rdnArr[i] = 'okten';
//         console.log(i, rdnArr[i]);
//     }
// }

// let i = rdnArr.length - 1;
// while (i >= 0) {
//         console.log(rdnArr[i]);
//     i--;
// }

// for (let i = rdnArr.length - 1; i >= 0; i--) {
//     if (rdnArr[i] % 3 === 0) {
//         console.log(rdnArr[i])
//         rdnArr[i] = 'okten';
//         console.log(i, rdnArr[i]);
//     }
// }

// #reLkOkTB29Q
const books = [
    {
        name: "The Whispering Woods",
        pages: 324,
        authors: ["Amelia Harper"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        name: "Zero Day Paradox",
        pages: 410,
        authors: ["Ethan Cole", "Mira Zhang"],
        genres: ["Science Fiction", "Thriller"]
    },
    {
        name: "Shadows of the Mind",
        pages: 275,
        authors: ["Liam Carter"],
        genres: ["Psychological Fiction", "Drama"]
    },
    {
        name: "Culinary Journeys Around the World",
        pages: 198,
        authors: ["Isabella Rossi", "Pierre Laurent"],
        genres: ["Non-fiction", "Travel", "Cooking"]
    },
    {
        name: "The Quantum Garden",
        pages: 350,
        authors: ["Mira Zhang"],
        genres: ["Science Fiction"]
    },
    {
        name: "Whispers Beneath the Ice",
        pages: 289,
        authors: ["Amelia Harper", "Ethan Cole"],
        genres: ["Mystery", "Thriller"]
    }
];

let theBook = '';

// let pagesCount = 0;
let longestBook = '';
// for (const book of books) {
//     if (pagesCount < book.pages) {
//         pagesCount = book.pages;
//         longestBook = book.name;
//     }
// }
// console.log(`The longest book: ${longestBook} with pages: ${pagesCount}`);


// let numGenres = 0;
// for (const book of books) {
//     if (book.genres.length > numGenres) {
//         numGenres = book.genres.length
//         theBook = book.name;
//     }
// }
// console.log(`Most genres ${numGenres} in book ${theBook}`);

// let longestName = 0;
// for (const book of books) {
//     if (book.name.length > longestName) {
//         longestName = book.name.length
//         theBook = book.name;
//     }
// }
// console.log(`Longest name: ${longestName} chars in book ${theBook}`);

// let doubleAuthors = []
// for (const book of books) {
//     if(book.authors.length === 1){
//         doubleAuthors[doubleAuthors.length] = book.name;
//     }
// }
// console.log(doubleAuthors);

// let evensArr = [];
// let arrLimit = 50;
// for (let i = 0; evensArr.length < arrLimit; i++) {
//     if(i % 2 !== 0) {
//         console.log(i)
//         evensArr.push(i);
//     }
// }
// console.log(evensArr.length);

/*let randomNumsArr = [];
for (let i = 0; i < 20; i++) {
    let rndNum = Math.round(Math.random() * 1000)
    randomNumsArr.push(rndNum);
}
console.log(randomNumsArr);*/

let minNum = 8;
let maxNum = 732;
let randomNumsArr = [];

// for (let i = 0; i < 20; i++) {
//     let rndNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
//     if(i % 3 === 0 && rndNum % 2 === 0) {
//         randomNumsArr.push(rndNum)
//     }
// }
// console.log(randomNumsArr);

for (let i = 0; i < 20; i++) {
    let rndNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
    randomNumsArr.push(rndNum)
}

console.log(randomNumsArr);
//
// for (let i = 0; i < randomNumsArr.length; i++) {
//     if(i + 1 <= randomNumsArr.length && randomNumsArr[i + 1] % 2 === 0) {
//         console.log(randomNumsArr[i]);
//     }
// }

// let prices = [100,250,50,168,120,345,188];
// let accumulator = 0;
// for (let price of prices) {
//     accumulator += price;
// }
// let average = accumulator / prices.length;
// console.log(average);

let multipliedArr = [];
for (let num of randomNumsArr) {
    let multipliedNum = num * 5
    multipliedArr.push(multipliedNum)
}

console.log(multipliedArr);

let numbersArr = []
const mixedArray = [
    3.14,
    null,
    ["apple", "banana", "cherry"],
    function add(a, b) {
        return a + b;
    },
    Symbol.for("shared"),
    new Date(),
    {title: "Book", pages: 250, authors: ["John", "Kate"]},
    undefined,
    BigInt(1234567890123456789n),
    "Hello",
    false,
    {nested: {key: "value", flag: true}},
    () => "Arrow function output",
    42,
    "World",
    new Date("2025-01-01"),
    999999999999999999999n,
    0,
    {id: 1, data: [true, false, null, "text"], meta: {created: new Date(), active: false}},
    [1, 2, 3],
    true,
    Symbol("unique"),
    {name: "Alice", age: 30},
    -7,
    `Interpolated ${new Date().getFullYear()}`,
    [[10, 20], [30, 40]],
    null,
    function greet(name) {
        return `Hello, ${name}!`;
    },
    5 > 10
];
for (let entry of mixedArray) {
    if (typeof entry === "number") {
        numbersArr.push(entry);
    }
}
console.log(numbersArr);


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let combined = []

for(let user of usersWithId){
    let combinedEntry = {}
    for (let city of citiesWithId){
        if(user.id === city.user_id) {
            combinedEntry['id'] = user.id;
            combinedEntry['name'] = user.name;
            combinedEntry['age'] = user.age;
            combinedEntry['status'] = user.status;
            combinedEntry['country'] = city.country;
            combinedEntry['city'] = city.city;
        }
    }
    combined.push(combinedEntry);
}

// console.log(combined);
