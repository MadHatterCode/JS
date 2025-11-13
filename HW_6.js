let words = ['hello worl', 'lorem ipsum', 'javascript is cool']

// #dFeorS3m7u
for (let word of words) {
    console.log(word.length);
}

for (let word of words) {
    console.log(word.toUpperCase());
}

// let str = 'dirty string'
// console.log(str.trim());

let str = 'Ревуть воли як ясла повні'
let arrToStr = (str) => str.split(' ')
console.log(arrToStr(str));

// let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let numToString = nums.map(x => x + '');

let nums = [11, 21, 3];

const sortNums = (arr, direction) => {
    switch (direction.toLowerCase()) {
        case 'ascending':
            return arr.sort((a, b) => a - b);
        case 'descending':
            return arr.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'descending'));

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
];

// — відсортувати його за спаданням за monthDuration
//
// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//

let sorted = coursesAndDurationArray
    .sort((a, b) => a.monthDuration - b.monthDuration)
    .filter(a => a.monthDuration > 5)
    .map((a,index) => {
        return{...a, id: index +1}})

console.log(sorted);

const suits = [
    { suit: 'spade', color: 'black' },
    { suit: 'club', color: 'black' },
    { suit: 'heart', color: 'red' },
    { suit: 'diamond', color: 'red' }
];

const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deck = [];
for (let { suit, color } of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    }
}
console.log(deck);

let aceOfSpades = deck.find(a => a.cardSuit === 'spade' && a.value === 'ace');
console.log(aceOfSpades);

function filterCards(card, option, value) {
    switch (option) {
        case 'suit': return card.suit === value;
        case 'color': return card.color === value;
        case 'value': return card.value === value;
        default: return false;
    }
}


let sixes = deck.filter(card => filterCards(card, 'value', 'ace'));
// console.log(sixes);


let suitPack = deck.reduce((acc,currentValue) => {
    if(acc[currentValue.cardSuit]) {
        acc[currentValue.cardSuit].push(currentValue);
    } else {
        acc[currentValue.cardSuit] = [];
        acc[currentValue.cardSuit].push(currentValue);
    }
    return acc;
}, {});
console.log(suitPack);