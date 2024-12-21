// https://leetcode.com/problems/3sum/description/
// 15.3Sum

// return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

var threeSum = function (nums) {
  var result = [];
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    map.set(0 - nums[i], nums[i]);
  }
  console.log(map);
  var left = 0;
  var right = nums.length - 1;
  while (left < right) {
    console.log("left: " + left + ", right: " + right);
    var sum = nums[left] + nums[right];
    console.log(sum);
    if (map.has(sum)) {
      console.log("left", left, sum);
    }
    left++;
    //   console.log("sum", map?.get(sum));
    //   if (0 - sum === map?.get(sum))
    //     result.push([0 - map?.get(sum), nums[left], nums[right]]);
    //   else if (sum < map?.get(sum)) left++;
    //   else right--;
    //   if (left === right) break;
  }
  console.log(result);
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
