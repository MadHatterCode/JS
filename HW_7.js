// #XjJuucOMR0

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1,  "John",     "Bolton",    "bolton@gmail.com",        "+9456247241234"),
    new User(22,  "Emily",    "Clark",     "emily.clark@gmail.com",   "+9456247241235"),
    new User(345,  "Michael",  "Turner",    "m.turner@gmail.com",      "+9456247241236"),
    new User(41,  "Sarah",    "Mitchell",  "sarah.m@gmail.com",       "+9456247241237"),
    new User(52,  "David",    "Harris",    "david.harris@gmail.com",  "+9456247241238"),
    new User(61,  "Olivia",   "Green",     "olivia.green@gmail.com",  "+9456247241239"),
    new User(745,  "James",    "Scott",     "jscott@gmail.com",        "+9456247241240"),
    new User(18,  "Sophia",   "Brooks",    "sophia.b@gmail.com",      "+9456247241241"),
    new User(9,  "Daniel",   "Howard",    "danielh@gmail.com",       "+9456247241242"),
    new User(105, "Isabella", "Watson",    "isabella.w@gmail.com",    "+9456247241243")
];

const filtered = users.filter(value => value.id % 2 === 0);
console.log(filtered);

const sorted = users.sort((a, b) => a.id - b.id);
console.log(sorted);

function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(1, "John", "Bolton", "bolton@gmail.com", "+9456247241234", [
        { title: "Book", price: 15 },
        { title: "Keyboard", price: 70 },
        { title: "Laptop Stand", price: 30 },
        { title: "Whatever", price: 30 },
    ]),

    new Client(2, "Emily", "Clark", "emily.clark@gmail.com", "+9456247241235", [
        { title: "Mouse", price: 25 },
    ]),

    new Client(3, "Michael", "Turner", "m.turner@gmail.com", "+9456247241236", [
        { title: "Headphones", price: 80 },
        { title: "Headphones", price: 80 },
        { title: "USB Cable", price: 10 },
        { title: "USB Cable", price: 10 },
        { title: "Portable Charger", price: 40 }
    ]),

    new Client(4, "Sarah", "Mitchell", "sarah.m@gmail.com", "+9456247241237", [
        { title: "Water Bottle", price: 20 },
        { title: "Yoga Mat", price: 35 },
    ]),

    new Client(5, "David", "Harris", "david.harris@gmail.com", "+9456247241238", [
        { title: "Gamepad", price: 50 },
        { title: "HDMI Cable", price: 15 },
        { title: "USB Hub", price: 25 },
        { title: "USB Hub", price: 25 },
        { title: "USB Hub", price: 25 },
        { title: "USB Hub", price: 25 },
    ]),

    new Client(6, "Olivia", "Green", "olivia.green@gmail.com", "+9456247241239", [
        { title: "Makeup Set", price: 45 },
        { title: "Mirror", price: 30 },
        { title: "Mirror", price: 30 },
        { title: "Cosmetic Bag", price: 20 }
    ]),

    new Client(7, "James", "Scott", "jscott@gmail.com", "+9456247241240", [
        { title: "Flashlight", price: 18 },
        { title: "Backpack", price: 60 },
        { title: "Sunglasses", price: 35 },
        { title: "Sunglasses", price: 35 }
    ]),

    new Client(8, "Sophia", "Brooks", "sophia.b@gmail.com", "+9456247241241", [
        { title: "Dress", price: 70 },
        { title: "Shoes", price: 90 },
    ]),

    new Client(9, "Daniel", "Howard", "danielh@gmail.com", "+9456247241242", [
        { title: "Monitor", price: 200 },
        { title: "Webcam", price: 50 },
        { title: "Microphone", price: 120 }
    ]),

    new Client(10, "Isabella", "Watson", "isabella.w@gmail.com", "+9456247241243", [
        { title: "Coffee Mug", price: 12 },
        { title: "Coaster Set", price: 8 },
        { title: "Coaster Set", price: 8 },
        { title: "Coaster Set", price: 8 },
        { title: "Tea Pack", price: 15 }
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
        console.log(`Їдемо зі швидкістю ${maxSpeed} кілометрів на годину`)
    }
    this.info = function () {
        for(let key in this) {
            console.log(key, this[key]);
        }
    }

}