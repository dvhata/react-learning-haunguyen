// https://leetcode.com/problems/palindrome-number/
// 9. Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function (x) {
  let newX = "";
  if (x < 0) return false;
  else {
    stringX = x.toString();
    for (var i = 0; i < stringX.length; i++) {
      if (stringX[i] !== stringX[stringX.length - 1 - i]) return false;
    }
    return true;
  }
};

isPalindrome(121);

// Finished successfully: 27.11.2024
