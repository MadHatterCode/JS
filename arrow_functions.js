const rectangleArea = (a, b) => a * b;
console.log(rectangleArea(2,3));

const circleArea = (r) => {
    return Math.PI * Math.pow(r,2);
}
console.log(circleArea(3));

const cylinderArea = (height, r) => 2 * Math.PI * r * (r + height);
console.log(cylinderArea(2,3))

let rndArr = [1, 2, 4, 66, 773, 323, 3, 5]

const arrPrinter = (arr) => {
    for(let item of arr) {
        console.log(item)
    }
}
arrPrinter(rndArr);

const paragraphPrinter = (text) => document.write(`<p>${text}</p>`)

paragraphPrinter('not deprecated');

const listPrinter = (text) => {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`);
}
listPrinter('nice');

const listPrinterCustom = (text, limit) => {
    document.write(`<ul>`);
    for(let i=0; i < limit; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);

}
listPrinterCustom('nice', 5);

let customArr = ['aa', true, 23, false, 15, -1, 'sos']

const printerSimple = (arr) => {
    document.write(`<ul>`)
    for(let el of arr) {
        document.write(`<li>${el}</li>`)
    }
    document.write(`</ul>`)
}
printerSimple(customArr)

const usersWithId = [
  { id: 1, name: 'vasya', age: 31, status: false },
  { id: 2, name: 'petya', age: 30, status: true },
  { id: 3, name: 'kolya', age: 29, status: true },
  { id: 4, name: 'olya', age: 28, status: false }
];

const userPrinter = (arr) => {
    for(let user of arr) {
        document.write(`
            <div>
                <p>${user.id} - ${user.name} - ${user.age} - ${user.status}
            </div>`)
    }
}
userPrinter(usersWithId);

const findSmallestInArr = (arr) => Math.min(...arr);
console.log(findSmallestInArr(rndArr));

const summArr = (arr) => {
    let sum = 0;
    for(let el of arr) {
        sum += el;
    }
    return sum;
}
console.log(summArr(rndArr));

// const swapIndexArr = (arr, index1, index2) => {
//     if(index1 < arr.length && index2 < arr.length) {
//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//         return arr;
//     } else {
//         throw new Error('invalid index numbers')
//     }
// }
// console.log(swapIndexArr(rndArr, 20, 4));

const exchangeMoney = (money, currencies, exchangeCurency) => {
    for (let item of currencies) {
        if(item.currency.toLowerCase() === exchangeCurency.toLowerCase()) {
            return money / item.value;
        }
    }
    console.log('We are not exchanging that type of currency')
    return null;
}


console.log(exchangeMoney(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));