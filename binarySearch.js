let arr = [];
let start = 0;
let end = arr.length - 1;
let target = 8;

for (let i = 1; i <= 1000; i++){
    arr.push(i)
}

function binarySearch(arr, start, end, target) {
    if(start > end) return false;
let midIndex = Math.floor((start + end)/2);
if (arr[midIndex] === target) return true;
if (arr[midIndex] < target) return binarySearch(arr, start, midIndex - 1, target)
else return binarySearch(arr, midIndex +1, end, target)
}
// console.log(binarySearch(arr, start, end, target));