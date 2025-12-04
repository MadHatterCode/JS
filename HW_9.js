let myDiv = document.createElement('div');
myDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
myDiv.style.backgroundColor = 'red';
myDiv.style.color = 'black';
myDiv.style.fontSize = '30px'
myDiv.innerText = "didn't work without defer on script tag"
document.body.appendChild(myDiv);

let newDiv = myDiv.cloneNode(true)

document.body.append(newDiv, myDiv);

let myArr = ['Main', 'Products', 'About us', 'Contacts'];
let myUl = document.createElement('ul');
for (let word of myArr) {
    let li = document.createElement('li');
    li.innerText = word;
    myUl.appendChild(li);
}
document.body.appendChild(myUl);



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for(let course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${course.title} - ${course.monthDuration}`;
    document.body.appendChild(div);
}

for(let course of coursesAndDurationArray) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    div.classList.add('item');
    h2.classList.add('heading');
    p.classList.add('description');
    h2.innerText = course.title;
    p.innerText = course.monthDuration;
    div.append(h2,p)
    document.body.appendChild(div);
}