// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// solution 1

// var majorityElement = function(nums) {
//     const newMap = new Map();  
//     let mostOcc = 0;  
//     let total = 0;  
//     for (let n of nums) {  
//         newMap.set(n, (newMap.get(n) || 0) + 1);  
//     }  

//     const newArr = Array.from(newMap);  
    
//     for (let ar of newArr) {  
//         if (ar[1] > total) {  
//             total = ar[1];  
//             mostOcc = ar[0];  
//         }  
//     }  

//     return mostOcc;  
// }; 


// solution 2 (Most effective)

var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
