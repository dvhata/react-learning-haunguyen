// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function (s) {
  var subString = "";
  var maxLength = 0;
  for (var i = 0; i < s.length; i++) {
    if (subString.includes(s[i])) {
      subString = subString.slice(subString.indexOf(s[i]) + 1);
    }
    subString += s[i];
    maxLength = Math.max(maxLength, subString.length);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //abc
console.log(lengthOfLongestSubstring("pwwkew")); //wke
console.log(lengthOfLongestSubstring("aab")); //ab
console.log(lengthOfLongestSubstring("dvdf")); //vdf
