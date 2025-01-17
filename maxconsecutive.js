// 485. Max Consecutive Ones
// Easy
// Topics
// Companies
// Hint
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.



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