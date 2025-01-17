/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let newArray = nums.join('').split('0');
    let max = 0;
    for(let i = 0; i < newArray.length; i++){
if(newArray[i].length > max){
    max = newArray[i].length;
    }
    }
    return max;

};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3