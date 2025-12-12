const valHolder = document.getElementById('value-holder');

const getNowSeconds = ()=> {
    return Date.now() / 1000;
}

const stored = localStorage.getItem('loadObject');

const loadObject = stored ? JSON.parse(stored) : {uahValue: 100, previousLoad: getNowSeconds()};

if(getNowSeconds() - loadObject.previousLoad > 3) {
    let {uahValue, previousLoad} = loadObject;
    uahValue += 10
    valHolder.textContent = uahValue;
    console.log(uahValue, previousLoad);
    localStorage.setItem('loadObject', JSON.stringify({uahValue, previousLoad: getNowSeconds()}));
} else {
    valHolder.textContent = loadObject.uahValue;
}

