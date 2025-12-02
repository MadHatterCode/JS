// #XjJuucOMR0

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, "John", "Bolton", "bolton@gmail.com", "+9456247241234"),
    new User(22, "Emily", "Clark", "emily.clark@gmail.com", "+9456247241235"),
    new User(345, "Michael", "Turner", "m.turner@gmail.com", "+9456247241236"),
    new User(41, "Sarah", "Mitchell", "sarah.m@gmail.com", "+9456247241237"),
    new User(52, "David", "Harris", "david.harris@gmail.com", "+9456247241238"),
    new User(61, "Olivia", "Green", "olivia.green@gmail.com", "+9456247241239"),
    new User(745, "James", "Scott", "jscott@gmail.com", "+9456247241240"),
    new User(18, "Sophia", "Brooks", "sophia.b@gmail.com", "+9456247241241"),
    new User(9, "Daniel", "Howard", "danielh@gmail.com", "+9456247241242"),
    new User(105, "Isabella", "Watson", "isabella.w@gmail.com", "+9456247241243")
];

const filtered = users.filter(value => value.id % 2 === 0);
console.log(filtered);

const sorted = users.sort((a, b) => a.id - b.id);
console.log(sorted);

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(1, "John", "Bolton", "bolton@gmail.com", "+9456247241234", [
        {title: "Book", price: 15},
        {title: "Keyboard", price: 70},
        {title: "Laptop Stand", price: 30},
        {title: "Whatever", price: 30},
    ]),

    new Client(2, "Emily", "Clark", "emily.clark@gmail.com", "+9456247241235", [
        {title: "Mouse", price: 25},
    ]),

    new Client(3, "Michael", "Turner", "m.turner@gmail.com", "+9456247241236", [
        {title: "Headphones", price: 80},
        {title: "Headphones", price: 80},
        {title: "USB Cable", price: 10},
        {title: "USB Cable", price: 10},
        {title: "Portable Charger", price: 40}
    ]),

    new Client(4, "Sarah", "Mitchell", "sarah.m@gmail.com", "+9456247241237", [
        {title: "Water Bottle", price: 20},
        {title: "Yoga Mat", price: 35},
    ]),

    new Client(5, "David", "Harris", "david.harris@gmail.com", "+9456247241238", [
        {title: "Gamepad", price: 50},
        {title: "HDMI Cable", price: 15},
        {title: "USB Hub", price: 25},
        {title: "USB Hub", price: 25},
        {title: "USB Hub", price: 25},
        {title: "USB Hub", price: 25},
    ]),

    new Client(6, "Olivia", "Green", "olivia.green@gmail.com", "+9456247241239", [
        {title: "Makeup Set", price: 45},
        {title: "Mirror", price: 30},
        {title: "Mirror", price: 30},
        {title: "Cosmetic Bag", price: 20}
    ]),

    new Client(7, "James", "Scott", "jscott@gmail.com", "+9456247241240", [
        {title: "Flashlight", price: 18},
        {title: "Backpack", price: 60},
        {title: "Sunglasses", price: 35},
        {title: "Sunglasses", price: 35}
    ]),

    new Client(8, "Sophia", "Brooks", "sophia.b@gmail.com", "+9456247241241", [
        {title: "Dress", price: 70},
        {title: "Shoes", price: 90},
    ]),

    new Client(9, "Daniel", "Howard", "danielh@gmail.com", "+9456247241242", [
        {title: "Monitor", price: 200},
        {title: "Webcam", price: 50},
        {title: "Microphone", price: 120}
    ]),

    new Client(10, "Isabella", "Watson", "isabella.w@gmail.com", "+9456247241243", [
        {title: "Coffee Mug", price: 12},
        {title: "Coaster Set", price: 8},
        {title: "Coaster Set", price: 8},
        {title: "Coaster Set", price: 8},
        {title: "Tea Pack", price: 15}
    ])
];

const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

function Car(model, make, year, maxSpeed, engineVolume) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`)
    }
    this.info = function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    }
    this.increaseMaxSpeed = function (speed) {
        this.maxSpeed += speed;
        console.log(this.maxSpeed);
    }
    this.changeYear = function (year) {
        this.year = year;
        console.log(this.year);
    }
    this.addDriver = function (driver) {
        if (this.driver) {
            this.driver.push(driver);
        } else {
            this.driver = []
            this.driver.push(driver);
        }
    }
}


class CarTwo {
    constructor(model, make, year, maxSpeed, engineVolume) {
        this.model = model;
        this.make = make;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    info() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    }

    increaseMaxSpeed(speed) {
        this.maxSpeed += speed;
        console.log(this.maxSpeed);
    }

    changeYear(year) {
        this.year = year;
        console.log(this.year);
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}

const cinderellas = [
    new Cinderella("Anna", 19, 34),
    new Cinderella("Bella", 20, 35),
    new Cinderella("Clara", 18, 33),
    new Cinderella("Diana", 21, 36),
    new Cinderella("Eva", 22, 37),
    new Cinderella("Fiona", 19, 34),
    new Cinderella("Grace", 23, 38),
    new Cinderella("Hanna", 20, 35),
    new Cinderella("Ivy", 18, 33),
    new Cinderella("Julia", 22, 36)
];

const prince = new Prince('John Prince', 22, 34);


for (let key of cinderellas) {
    console.log(key)
    if (key.footSize === prince.foundShoeSize) {
        console.log(`${key.name} should be with the ${prince.name}`)
    }
}

const theOneCinderella = cinderellas.find(c => c.footSize === prince.foundShoeSize);
console.log(theOneCinderella);


Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

cinderellas.myForEach(e => console.log(e));

Array.prototype.myFilter = function (callback) {
    const filtered = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            filtered.push(this[i]);
        }
    }
    return filtered;
}

const filteredCinderellas = cinderellas.myFilter(e => e.age < 20)
console.log(filteredCinderellas);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


const mapped = coursesAndDurationArray.map((e, index) => ({...e, id: index + 1}));
console.log(mapped);

const deepCopy = (obj) => {
    if(obj) {
        let funcCopyArr = [];
        for (let key in obj) {
            if(typeof obj[key] === 'function') {
                let funcCopy = obj[key].bind({});
                funcCopyArr.push({key, funcCopy});

            }
        }
        let objCopy = JSON.parse(JSON.stringify(obj));
        for(let func of funcCopyArr) {
            objCopy[func.key] = func.funcCopy;
        }
        return objCopy;
    }
}

console.log(deepCopy(clients));


