// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/description/

// Given an array of strings strs, group the
// anagrams
//  together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

var groupAnagrams = function (strs) {
  var groupString = new Map();
  for (var i = 0; i < strs.length; i++) {
    var sortedStr = strs[i].split("").sort().join("");
    if (groupString.has(sortedStr)) {
      groupString.get(sortedStr).push(strs[i]);
    } else {
      groupString.set(sortedStr, [strs[i]]);
    }
  }
  return Array.from(groupString.keys());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
