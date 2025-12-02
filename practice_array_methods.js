function max(arr) {
    let maxNum = arr[0]
    for(let num of arr) {
        if(num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}
console.log(max([-1,-2,-3]));

function sum(arr) {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i];
    }
    return acc;
}


console.log(sum([1, 2, 3, 4]));

function myFilter(arr, callback) {
    let filtered = []
        for(let item of arr) {
            if(callback(item)) {
                filtered.push(item);
            }
        }
    return filtered;
}

console.log(myFilter([1, 2, 3, 4], function (item) {
    return item > 2;
}))

function groupBy(arr, key) {

}