// let mDIV = document.createElement("div");
// mDIV.id = 'text';
// mDIV.innerText = 'TEXT';
// mDIV.setAttribute('style', 'width: 200px; height: 200px; background: grey;');
// let mButton = document.createElement("button");
// mButton.innerText = 'Delete Text';
// document.body.append(mDIV, mButton);
// mButton.addEventListener("click", function () {
//     if(document.querySelector('#text')){
//         document.querySelector('#text').style.display = 'none';
//     }
//     console.log(this)
// })
//
//
// let f1 = document.forms[0];
// f1.onsubmit = function (event) {
//     event.preventDefault();
//     let age = Number(f1.age.value || null);
//     console.log(age < 18 ? 'You are not prepared':'You are good')
// }


// let sessionList = JSON.parse(localStorage.getItem('sessions')) || [];
// let pageName = window.location.pathname;
// switch (pageName) {
//     case '/JS/index.html':
//         let date = new Date();
//         sessionList.push(date)
//         localStorage.setItem('sessions', JSON.stringify(sessionList));
//         break;
//     case '/JS/sessionsListPrint.html':
//         const list = document.createElement("ul")
//         sessionList.forEach(e => {
//             let li = document.createElement('li');
//             li.innerText = e;
//             list.appendChild(li);
//         })
//         document.body.appendChild(list);
//         break
// }


const converterInput = document.querySelector("#converter");
const convertedValue = document.querySelector("#converted-value");

converterInput.addEventListener("input", (e) => {
    const kg = Number(e.target.value);
    convertedValue.textContent = kg ? Math.round(kg * 2.2046) : "";
});


