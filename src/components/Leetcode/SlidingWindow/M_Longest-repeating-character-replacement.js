// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/description/

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:

// Input: s = AABABBA, k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

var characterReplacement = function (s, k) {
  var maxLength = 0;
  var substring = s[0];
  var left = 1;
  var dif = 0;
  var countK = k;
  var isDif = true;
  while (left < s.length) {
    if (substring.includes(s[left])) {
      substring += s[left];
      left++;
    } else {
      substring += s[left];
      if (isDif) {
        dif = left;
        isDif = false;
      }
      maxLength++;
      countK--;
      left++;
    }
    maxLength = Math.max(maxLength, substring.length);
    if (countK === 0) {
      isDif = true;
      left = dif;
      subString = s[dif];
      countK = k;
      if (substring[left] === substring[left - 2]) maxLength++;
    }
  }
  console.log(maxLength);
  console.log(substring);
};

console.log(characterReplacement("AABABBA", 1)); // 4
