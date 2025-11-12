// // #dYQNrBV
//
// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let one = 1;
// let ten = 10;
// let nnn = -999;
// let oneTwoThree = 123;
// const PI = 3.14
// let twoSeven = 2.7;
// let sixteen = 16;
// let positive = true;
// let negative = false
//
// console.log(hello, owu, com, ua, one, ten, nnn, oneTwoThree, PI, twoSeven, sixteen, positive, negative);
//
// // #6Qb97gsv
// let firstName = 'Sergii';
// let middleName = 'Oleksandrovich';
// let lastName = 'Bezsalyi';
//
// let person = firstName + ' ' + middleName + ' ' + lastName;
// console.log(person);
//
// // #4N0y5tufA
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a, typeof b, typeof c);

//#67kfznmiMl
// let arr = [1, 2, true, 'abc', {name: 'Michael,', age: '32'}, false, [5, 6, 7], 'yes', 'no', 'maybe so'];
// console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
//
// // #LARqoUj5I
// let books = [
//     {
//         title: 'LoTR',
//         pageCount: 2000,
//         genre: 'fantasy'
//     },
//     {
//         title: 'Clockwork Orange',
//         pageCount: 500,
//         genre: 'drama'
//     },
//     {
//         title: 'Thinking Fast and Slow',
//         pageCount: 700,
//         genre: 'neuropsychology'
//     }
// ];
//
// // #sA3Gg1sCp
// let books2 = [
//     {
//         title: 'LoTR',
//         pageCount: 2000,
//         genre: 'fantasy',
//         author: [{name: 'Michael', age: '32'}]
//     },
//     {
//         title: 'Clockwork Orange',
//         pageCount: 500,
//         genre: 'drama',
//         author: [{name: 'John', age: '47'}]
//     },
//     {
//         title: 'Thinking Fast and Slow',
//         pageCount: 700,
//         genre: 'neuropsychology',
//         author: [{name: 'Jim', age: '56'}]
//     }
// ];
//
// // #jCHFnEbdmFd
//
// let users = [
//     {
//         name: 'Michael', username: 'michael@gmail.com', password: '123456',
//     },
//     {
//         name: 'Jim', username: 'jim@gmail.com', password: '123456a',
//     },
//     {
//         name: 'Jane', username: 'jim@gmail.com', password: '123456j',
//     },
//     {
//         name: 'Lisa', username: 'jim@gmail.com', password: '123456m',
//     },
//     {
//         name: 'Ben', username: 'jim@gmail.com', password: '123456e',
//     },
//     {
//         name: 'Jerry', username: 'jim@gmail.com', password: '123456n',
//     },
//     {
//         name: 'John', username: 'jim@gmail.com', password: '123456z',
//     },
//     {
//         name: 'Alex', username: 'jim@gmail.com', password: '123456x',
//     },
//     {
//         name: 'Lola', username: 'jim@gmail.com', password: '123456c',
//     },
//     {
//         name: 'Tiffany', username: 'jim@gmail.com', password: '123456b',
//     },
// ]
//
// console.log(users[0]['password'], users[1]['password'], users[2]['password'], users[3].password, users[4]['password'], users[5]['password'], users[6]['password'], users[7]['password'], users[8]['password'], users[9]['password']);
//
// //#jCHFnEbdmFd
//
// let temperatures = [
//     {day: 'Monday', temperature: [7, 10, 8]},
//     {day: 'Tuesday', temperature: [4, 10, 6]},
//     {day: 'Wednesday', temperature: [5, 12, 7]},
//     {day: 'Thursday', temperature: [4, 11, 8]},
//     {day: 'Friday', temperature: [5, 12, 9]},
//     {day: 'Saturday', temperature: [2, 7, 4]},
//     {day: 'Sunday', temperature: [2, 6, 3]},
//

// // #bAUsaq6LI
// let n = 0;
//
// if(n !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('невірно')
// }

//#3ckURgvs
// let time = parseInt(prompt('Enter time number between 0 and 59'));

// if (time >= 0 && time <= 59) {
//    if(time < 15) {
//        console.log('first quarter')
//    }
//    else if (time => 15 && time <= 30) {
//        console.log('second quarter');
//    } else if (time => 30 && time <= 45) {
//        console.log('third quarter');
//    } else {
//        console.log('fourth quarter');
//    }
// } else {
//     console.log('Please enter a valid time number')
// }

// #UMoNq4biWGe

// let day = parseInt(prompt('Enter day number between 1 and 31'));
//
// if (day >= 0 && day <= 59) {
//    if(day < 10) {
//        console.log('first decade')
//    }
//    else if (day => 10 && day <= 20) {
//        console.log('second decade');
//    } else {
//        console.log('third decade');
//    }
// } else {
//     console.log('Please enter a valid day number')
// }

//#KzrtqyQ

// let dayOfWeek = prompt('Enter the number of the day of week? Sunday through Saturday');
// switch (dayOfWeek) {
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//
// }

// // #uwsz1RnTQJ1
// let numOne = parseInt(prompt("Enter a first number"));
// let numTwo = parseInt(prompt("Enter a second number"));
//
// if (numOne > numTwo) {
//     console.log(`First number is ${numOne} and is bigger than second number ${numTwo}`);
// } else {
//     console.log(`Second number is ${numTwo} and is bigger than first number ${numOne}`);
// }

//#iBvqtjEm

// let x = {}
// if (!!x) {
//     console.log(x);
// } else {
//     userInput = 'default';
//     console.log(userInput);
// }

// #awLXL6TBzg
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('Super', coursesAndDurationArray[0].title + ' ' + 'is longer that 5 months');
// }
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('Super', coursesAndDurationArray[1].title + ' ' + 'is longer that 5 months');
// }
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('Super', coursesAndDurationArray[2].title + ' ' + 'is longer that 5 months');
// }
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('Super', coursesAndDurationArray[3].title + ' ' + 'is longer that 5 months');
// }
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('Super', coursesAndDurationArray[4].title + ' ' + 'is longer that 5 months');
// }

// #y7crMeFwHcS
// for(i=0; i < 10; i++){
//     document.write(`<div><p>This is element ${i+1}</p></div>`);
// }

// #uzkt71dp
// let numBlocks = 0;
// while (numBlocks < 20) {
//     document.write(`<h1>I am block number ${numBlocks+1}</h1>`);
//     numBlocks++;
// }

// #vLSZKMlO
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (let item of listOfItems) {
//     document.write(`<li>${item}</li>`)
// }
// document.write(`</ul>`)

// let products = [
//
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg'
//
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ]


// for (let i = 0; i < products.length; i++) {
//     let item = products[i];
//     document.write(`
//      <div class='product-card'>
//         <h3 class='product-title'>${item.title}. Price – ${item.price}</h3>
//         <img src='${item.image}' alt='' class='product-image'>
//     </div>
//     `)
// }

// #4WrHwFTEop0
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     if (user.age > 30) {
//         console.log('name: ' +user.name, 'age: ' + user.age);
//     }
// }
