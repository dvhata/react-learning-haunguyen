// 1346. Check If N and Its Double Exist
//https://leetcode.com/problems/check-if-n-and-its-double-exist/?envType=daily-question&envId=2024-12-01

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

var checkIfExist = function (arr) {
  var map = new Map();
  var length = arr?.length;
  for (let i = 0; i < length; i++) {
    if (map.has(arr[i] * 2) || map.has(arr[i] / 2)) {
      return true;
    } else {
      map.set(arr[i], i);
    }
  }
  return false;
};

console.log(checkIfExist([7, 1, 14, 11]));
