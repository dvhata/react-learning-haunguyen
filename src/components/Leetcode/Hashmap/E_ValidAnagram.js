// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = function (s, t) {
  var lengthS = s.length;
  var lengthT = t.length;
  if (lengthS !== lengthT) return false;
  else {
    var charCount = new Map();
    for (var i = 0; i < lengthS; i++) {
      charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    }
    for (var i = 0; i < lengthT; i++) {
      if (!charCount.get(t[i])) return false;
      else {
        charCount.set(t[i], charCount.get(t[i]) - 1);
        if (charCount.get(t[i]) < 0) return false;
      }
    }
    return true;
  }
};

console.log(isAnagram("anagram", "nagaram")); //true
