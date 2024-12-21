// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.\

var checkIsCharacter = (s) => {
  if (
    (s >= "a" && s <= "z") ||
    (s >= "A" && s <= "Z") ||
    (s >= "0" && s <= "9")
  )
    return true;
  else return false;
};

var isPalindrome = function (s) {
  var left = 0;
  var right = s.length - 1;
  for (let key in s) {
    console.log(key, s[key]);
    console.log("before", left, right);
    if (!checkIsCharacter(s[left])) {
      left++;
    } else if (!checkIsCharacter(s[right])) {
      right--;
    } else if (left === right) return true;
    else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      } else {
        left++;
        right--;
      }
    }
    console.log("after", left, right);
  }
  return true;
};

// console.log(isPalindrome("race a car")); //false
console.log("result", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("result", isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome(" ")); // true

var isPalindrome2 = function (s) {
  var left = 0;
  var right = s.length - 1;
  while (left < right) {
    while (left < right && !checkIsCharacter(s[left])) left++;
    while (left < right && !checkIsCharacter(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
