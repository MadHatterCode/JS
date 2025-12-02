let myDiv = document.createElement('div');
myDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
myDiv.style.backgroundColor = 'red';
myDiv.style.color = 'black';
myDiv.style.fontSize = '30px'
myDiv.innerText = "didn't work without defer on script tag"
document.body.appendChild(myDiv);

let newDiv = document.createElement('div');
for(let myClass in myDiv.classList.keys()){
    newDiv.classList.add(myClass);
}

console.log(newDiv)