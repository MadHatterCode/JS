// Inputs
const mainInput = document.getElementById("mainInput");
const savedValuesArea = document.getElementById("savedValues");

// Buttons
const addButton = document.getElementById('addBtn');
const sortKeyBtn = document.getElementById('sortKeyBtn');
const sortValueBtn = document.getElementById('sortValueBtn');
const deleteButton = document.getElementById('deleteBtn');

const localStorageArr = JSON.parse(localStorage.getItem('keyValArr')) || [];

addButton.addEventListener('click', () => {
    const inputVal = mainInput.value;
    if(inputVal && validateInput(inputVal.trim())) {
        const pairArr= inputVal.split('=');
        const pairObj = {key:pairArr[0], value:pairArr[1]};
        pushLocalStorage(pairObj);
        renderEntries();
        mainInput.value = '';
    } else {
        showWarning()
        mainInput.value = '';
    }
})

const validateInput = (input) => {
    const re = /^[A-Za-z0-9]{1,16}=[A-Za-z0-9]{1,16}$/;
    return re.test(input);
}

const pushLocalStorage = (obj) => {
    localStorageArr.push(obj);
    localStorage.setItem('keyValArr', JSON.stringify(localStorageArr));
}

const showWarning = () => {
    console.log('Please enter key value in the appropriate way');
}

const renderEntries = ()=> {
    if(!savedValuesArea.innerText) {
        for (const pair of localStorageArr) {
            savedValuesArea.textContent += `[${pair.key}=${pair.value}</br>]`;
        }
    } else {

    }

}

