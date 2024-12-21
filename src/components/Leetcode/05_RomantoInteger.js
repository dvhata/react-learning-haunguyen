// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// ... existing code ...
var map = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);
// ... existing code ...
var romanToInt = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < map.get(s[i + 1])) {
      result -= map.get(s[i]);
    } else {
      result += map.get(s[i]);
    }
  }
  console.log(result);
  return result;
};

romanToInt("MCMXCIV");
