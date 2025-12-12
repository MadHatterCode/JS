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


let sessionList = JSON.parse(localStorage.getItem('sessions')) || [];
let pageName = window.location.pathname;
switch (pageName) {
    case '/JS/index.html':
        let date = new Date();
        sessionList.push(date)
        localStorage.setItem('sessions', JSON.stringify(sessionList));
        break;
    case '/JS/sessionsListPrint.html':
        const list = document.createElement("ul")
        sessionList.forEach(e => {
            let li = document.createElement('li');
            li.innerText = e;
            list.appendChild(li);
        })
        document.body.appendChild(list);
        break
}


// const converterInput = document.querySelector("#converter");
// const convertedValue = document.querySelector("#converted-value");
//
// converterInput.addEventListener("input", (e) => {
//     const kg = Number(e.target.value);
//     convertedValue.textContent = kg ? Math.round(kg * 2.2046) : "";
// });


const addToLocalStorage = (localArrKey, obj) => {
    const arrGet = JSON.parse(localStorage.getItem(localArrKey) || '[]');
    arrGet.push(obj);
    localStorage.setItem(localArrKey, JSON.stringify(arrGet));
}

addToLocalStorage('sessions', {name: 'John', surname: 'Localstorage'});

const tableContainer = document.querySelector(".table-creator");
const tableCreatorForm = document.querySelector(".table-creator form");

const tableCreator = () => {
    const formFields = ['rows', 'columns', 'cellContent']
    const formValues = formFields.reduce((acc, fieldName) => {
        const fieldValue = tableCreatorForm[fieldName].value.trim();
        acc[fieldName] = fieldName === 'cellContent'? fieldValue : Number(fieldValue);
        return acc;
    }, {})
    const table = document.createElement("table");
    for(let i = 0; i < formValues.rows; i++) {
        const row = document.createElement("tr");
        for(let j = 0; j < formValues.columns; j++) {
            const cell = document.createElement("td");
            cell.textContent = formValues.cellContent;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tableContainer.appendChild(table);

}

tableCreatorForm.onsubmit = (e) => {
    e.preventDefault();
    tableCreator()
};