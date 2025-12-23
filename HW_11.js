const constRecipesContainer = document.createElement("div");
constRecipesContainer.classList.add("recipes-container");

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObj => {
        const {recipes} = recipesObj;
        console.log(recipes);
    });

const printRecipes = (recipes) => {
    for (const recipe of recipes) {
        
    }
}

// fetch('https://dummyjson.com/carts ')
//     .then(res => res.json())
//     .then(res => {
//         console.log(res);
//         const carts = res.carts;
//         for (const cart of carts) {
//             const cartList = document.createElement('ul');
//             for (const cartKey in cart) {
//                 const cartItem = cart[cartKey];
//                 cartList.append(createItems(cartItem, cartKey));
//             }
//             document.body.append(cartList);
//         }
//     });
//
// const createItems = (cartItem, cartKey) => {
//     if (cartItem === null || cartItem === undefined) return;
//
//     if (Array.isArray(cartItem)) {
//         const ul = document.createElement('ul');
//         for (const item of cartItem) {
//              const li = createItems(item, cartKey);
//              if(li) ul.appendChild(li);
//         }
//         return ul;
//     }
//
//     if(typeof cartItem === 'object') {
//         const ul = document.createElement('ul');
//         for (const key in cartItem) {
//             const li = createItems(cartItem[key], key);
//             if(li) ul.appendChild(li);
//         }
//         return ul;
//     }
//
//     const item = document.createElement('li');
//     item.textContent = `${cartKey}: ${cartItem}`
//     return item;
// }


// const nums = [1, [2, [3, 4]], 5, [6]];
//
// const sumNested = (arr) => {
//     let accumulator = 0;
//     for (const arrElement of arr) {
//         if(Array.isArray(arrElement)) {
//             accumulator += sumNested(arrElement);
//         } else {
//             accumulator += arrElement;
//         }
//     }
//     return accumulator;
// }
// console.log(sumNested(nums));
//
//
// function printPrimitivesStack(root) {
//     const stack = [root];
//     console.log(stack);
//
//     while (stack.length) {
//         const value = stack.pop();
//
//         if (value === null || value === undefined) continue;
//
//         if (Array.isArray(value)) {
//             // push in reverse so output order matches left-to-right traversal
//             for (let i = value.length - 1; i >= 0; i--) {
//                 stack.push(value[i]);
//             }
//             continue;
//         }
//
//         if (typeof value === 'object') {
//             // iterate own enumerable keys; push values in reverse to preserve order
//             const keys = Object.keys(value);
//             for (let i = keys.length - 1; i >= 0; i--) {
//                 stack.push(value[keys[i]]);
//             }
//             continue;
//         }
//
//         // primitive (string/number/boolean/symbol/bigint) - print it
//         console.log(value);
//     }
// }
//
// printPrimitivesStack(nums);

