// 1. Two Sum
// https://leetcode.com/problems/two-sum/description/

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  var mapNum = new Map();
  nums.forEach(function (num, index) {
    if (mapNum.has(num)) {
      var index_2 = mapNum.get(num)[1];
      var index_1 = index;
      console.log[(index_1, index_2)];
      result = index_1 < index_2 ? [index_1, index_2] : [index_2, index_1];
    } else {
      mapNum.set(target - num, [num, index]);
    }
  });
  return result;
};

var twoSum2 = function (nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var check = target - nums[i];
    if (map.has(check)) {
      return [map.get(check), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum([3, 3], 6));
