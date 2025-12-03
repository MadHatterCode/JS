let mDIV = document.createElement("div");
mDIV.id = 'text';
mDIV.innerText = 'TEXT';
mDIV.setAttribute('style', 'width: 200px; height: 200px; background: grey;');
let mButton = document.createElement("button");
mButton.innerText = 'Delete Text';
document.body.append(mDIV, mButton);
mButton.addEventListener("click", function () {
    if(document.querySelector('#text')){
        document.querySelector('#text').style.display = 'none';
    }
    console.log(this)
})


let f1 = document.forms[0];
f1.onsubmit = function (event) {
    event.preventDefault();
    if(f1.age.value && f1.age.value < 18) {
        console.log('You are not prepared')
    }
}
