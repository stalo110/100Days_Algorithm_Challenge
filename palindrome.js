// 125. Valid Palindrome
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.




/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.trim().length === 0) return true;

    let singleWord = "";

    for (let char of s) {
        if (
            (char >= "a" && char <= "z") || 
            (char >= "A" && char <= "Z") || 
            (char >= "0" && char <= "9") 
        ) {
            singleWord += char.toLowerCase(); 
        }
    }

    let left = 0;
    let right = singleWord.length - 1;

    while (left < right) {
        if (singleWord[left] !== singleWord[right]) {
            return false; 
        }
        left++;
        right--;
    }

    return true; 
};

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("No lemon, no melon")); // true
