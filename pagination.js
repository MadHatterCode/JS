// create an array to paginate

function createItemsArray(count = 100) {
    const result = [];

    for (let i = 0; i < count; i++) {
        result.push({
            id: i + 1,
            name: `Item ${i + 'M'}`,
            value: Math.floor(Math.random() * 1000)
        });
    }

    return result;
}


const items = createItemsArray();

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const content = document.getElementById('content');
const step = 10;
let pageCount = Math.round(items.length / step);
let currentPage = 0;
let firstLoad = true;
console.log(currentPage);

nextButton.addEventListener('click', (e) => {
    currentPage++;
    if (currentPage + 1 >= pageCount) {
        e.target.disabled = true;
    }
    content.innerHTML = '';
    loadItems(items, currentPage);
    prevButton.disabled = false;
});

prevButton.addEventListener('click', (e) => {
    currentPage--;
    if(firstLoad || currentPage - 1 < 0) {
        e.target.disabled = true;
    }
    content.innerHTML = '';
    loadItems(items, currentPage);
    nextButton.disabled = false;
})

let loadItems = (arr, currentPage) => {
    let pageStart = firstLoad ? 0 : currentPage * step;
    const pagesLimit = step * (currentPage + 1);
    for (let i = pageStart; i < pagesLimit; i++) {
        const p = document.createElement('p');
        const item = arr[i]
        p.textContent = `${item.id} ${item.name} ${item.value}`;
        content.appendChild(p);
    }
    firstLoad = false;
}

loadItems(items, currentPage)